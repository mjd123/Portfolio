import { SingleProjectComponent } from './single-project/single-project.component';
import { element } from 'protractor';
import {
    Component,
    OnInit,
    OnDestroy,
    AfterViewInit,
    HostListener,
    ElementRef,
    ViewChild,
    ViewChildren,
    QueryList,
    Input,
    Renderer2,
    NgZone,
} from '@angular/core';

import { CanvasBlob } from '../animations/blob-canvas-animation';

import { TweenMax, TimelineMax } from 'gsap';

import ScrollMagic from 'ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

//import { TweenLite } from "gsap";
//import { ScrollToPlugin } from "gsap/ScrollToPlugin";
//import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import { timingSafeEqual } from 'crypto';
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
    @ViewChild('projectsText', { static: true }) projectsText: ElementRef;
    @ViewChildren('projects') projects: QueryList<any>;
    @ViewChild('canvas', { static: true }) canvas: ElementRef;
    @ViewChildren('overlayTitle') overlayTitle: ElementRef;
    @Input() delete: boolean = true;
    projectsContainer: HTMLElement;

    singleProjects: any = [
        {
            text: {
                title: 'El pastor',
                subTitle: 'javascript • css • website',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            image: {
                src: 'https://via.placeholder.com/460',
                alt: 'picture of project',
                url: '1',
            },
        },
        {
            text: {
                title: 'Creative Family',
                subTitle: 'javascript • css • website',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            image: {
                src: 'https://via.placeholder.com/460',
                alt: 'picture of project',
                url: '1',
            },
        },
    ];

    singleProject: any;

    images = [
        'https://via.placeholder.com/460',
        'https://via.placeholder.com/460',
        'https://via.placeholder.com/460',
        'https://via.placeholder.com/460',
    ];

    public ScrollMagic: any;

    controller = new ScrollMagic.Controller();
    width: number;
    height: number;
    elementChildren: Array<any>;

    constructor(
        private renderer: Renderer2,
        private el: ElementRef,
        private ngZone: NgZone,
        private CanvasBlob: CanvasBlob
    ) {
        this.ScrollMagic = require('scrollmagic');
    }

    ngOnInit() {}

    ngAfterViewInit() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.elementChildren = this.projects.last.nativeElement.children;

        this.projectsContainer = this.projects.last.nativeElement;

        const projectsText = this.projectsText.nativeElement.getBoundingClientRect();

        const finalProjectTextWidth: any = (projectsText.width * 0.1).toFixed(0);

        let tweens = {
            headerColorFadeOut: TweenMax.to('header, .projects', 2000, {
                backgroundColor: '#f5eee2',
                //opacity: 1,
                ease: 'Power1.easeOut',
            }),
            projectsColorFadeOut: TweenMax.to('.projects ,.app-content, .about ', 2000, {
                backgroundColor: '#006b64',
                //opacity: 1,
                ease: 'Power1.easeOut',
            }),
            overlayTextChangeTitle: TweenMax.to('.project-container .overlay .title', 2000, {
                fontSize: '30',
                //opacity: 1,
                ease: 'Power1.easeOut',
            }),
            overlayTextChangeSubTitle: TweenMax.to('.project-container .overlay .sub-title', 2000, {
                fontSize: '16',
                //opacity: 1,
                ease: 'Power1.easeOut',
            }),
            overlayBorderChangeSubTitle: TweenMax.to('.project-container .overlay', 2000, {
                border: '1px solid black',
                //opacity: 1,
                ease: 'Power1.easeOut',
            }),
            // start of projects sliding in
            startTween: TweenMax.to('.projects-text', 800, {
                scale: 0.3,
                opacity: 0,
                ease: 'Linear.easeNone',
            }),
            wipeAnimations: [
                new TimelineMax().fromTo(
                    '.one',
                    1000,
                    { x: this.width - this.elementChildren[2].clientWidth / 2, y: '0%' },
                    {
                        scale: 1,
                        z: -1500,
                        x:
                            this.width > 900
                                ? this.width / 2 - 30 // center with 30px margin
                                : this.width / 2 - this.elementChildren[2].clientWidth,
                        y: `${this.width > 420 ? '40%' : '0%'}`,
                        ease: 'Linear.easeNone',
                    }
                ),
                new TimelineMax().fromTo(
                    '.two',
                    1000,
                    { x: 0 - this.width - this.elementChildren[3].clientWidth },
                    {
                        scale: 1,
                        z: -1500,
                        x:
                            this.width > 900
                                ? this.width / 2 - this.elementChildren[3].clientWidth - 90
                                : this.width / 2,
                        y: this.width > 900 ? '15%' : this.elementChildren[2].clientHeight - 80,
                        ease: 'Linear.easeNone',
                    }
                ),
                new TimelineMax().fromTo(
                    '.three',
                    1000,
                    {
                        x: this.width - this.elementChildren[4].clientWidth / 4,
                        y: '160%',
                    },
                    {
                        scale: 1,
                        z: -1500,
                        x:
                            this.width > 900
                                ? this.width / 2 - this.elementChildren[4].clientWidth - 90
                                : this.width / 2 - this.elementChildren[3].clientWidth,
                        y: this.width > 900 ? '120%' : this.elementChildren[3].clientHeight + 40,
                        ease: 'Linear.easeNone',
                    }
                ),
                new TimelineMax().fromTo(
                    '.four',
                    1000,
                    { x: this.width + this.elementChildren[5].clientWidth, y: '80%' },
                    {
                        scale: 1,
                        z: -1500,
                        x: this.width > 420 ? this.width / 2 - 30 : this.width / 2,
                        y:
                            this.width > 420
                                ? 0
                                : this.elementChildren[4].clientHeight +
                                  this.elementChildren[3].clientHeight,
                        ease: 'Linear.easeNone',
                    }
                ),
            ],
        };
        let timeline = new TimelineMax();
        let timelineTwo = new TimelineMax();

        timeline.add([tweens.headerColorFadeOut]);
        timelineTwo.add([
            tweens.projectsColorFadeOut,
            tweens.overlayTextChangeTitle,
            tweens.overlayTextChangeSubTitle,
            tweens.overlayBorderChangeSubTitle,
        ]);

        // header color fade
        new ScrollMagic.Scene({
            triggerHook: 0,
            duration: 500, // the scene should last for a scroll distance of 100px
            offset: 200, // start this scene after scrolling for 50px
        })
            .addIndicators()
            .setTween(timeline)

            //.setPin('.projects-text, .projects') // pins the element for the the scene's duration
            .addTo(this.controller); // assign the scene to the controller

        //containeing
        new ScrollMagic.Scene({
            triggerElement: '.projects',
            duration: this.width > 900 ? 3500 : this.height * 2.2, // the scene should last for a scroll distance of 100px
            offset: this.width > 900 ? 550 : this.height / 2.1, // start this scene after scrolling for 50px
        })
            .addIndicators()
            .setTween(tweens.startTween)

            .setPin('.projects-text, .projects') // pins the element for the the scene's duration
            .addTo(this.controller); // assign the scene to the controller

        // text scale
        new ScrollMagic.Scene({
            triggerElement: '.projects',
            duration: this.width > 900 ? 3000 : this.height * 2, // the scene should last for a scroll distance of 100px
            offset: this.width > 900 ? 550 : 300, // start this scene after scrolling for 50px
        })
            .addIndicators()
            .setTween(tweens.startTween)

            //.setPin(".projects-text, .projects") // pins the element for the the scene's duration
            .addTo(this.controller); // assign the scene to the controller

        // project image
        new ScrollMagic.Scene({
            triggerElement: '.projects',
            duration: this.width > 900 ? 2500 : this.height * 2, // the scene should last for a scroll distance of 100px
            offset: this.width > 900 ? 800 : 300, // start this scene after scrolling for 50px
        })
            .addIndicators()
            .setTween(tweens.wipeAnimations[0])
            .addTo(this.controller); // assign the scene to the controller

        // project image
        new ScrollMagic.Scene({
            triggerElement: '.projects',
            duration: this.width > 900 ? 2000 : this.height * 2, // the scene should last for a scroll distance of 100px
            offset: this.width > 900 ? 800 : 300, // start this scene after scrolling for 50px
        })
            .addIndicators()
            .setTween(tweens.wipeAnimations[1])
            .addTo(this.controller); // assign the scene to the controller

        // project image
        new ScrollMagic.Scene({
            triggerElement: '.projects',
            duration: this.width > 900 ? 2200 : this.height * 2, // the scene should last for a scroll distance of 100px
            offset: this.width > 900 ? 800 : 300, // start this scene after scrolling for 50px
        })
            .addIndicators()
            .setTween(tweens.wipeAnimations[2])
            .addTo(this.controller); // assign the scene to the controller

        // project image
        new ScrollMagic.Scene({
            triggerElement: '.projects',
            duration: this.width > 900 ? 2000 : this.height * 2, // the scene should last for a scroll distance of 100px
            offset: this.width > 900 ? 800 : 300, // start this scene after scrolling for 50px
        })
            .addIndicators()
            .setTween(tweens.wipeAnimations[3])
            .addTo(this.controller); // assign the scene to the controller

        new ScrollMagic.Scene({
            triggerElement: '.about',
            duration: 500, // the scene should last for a scroll distance of 100px
            offset: -200, // start this scene after scrolling for 50px
        })
            .addIndicators()
            .setTween(timelineTwo)
            .addTo(this.controller); // assign the scene to the controller

        let blobOne = new CanvasBlob();

        this.ngZone.runOutsideAngular(() =>
            blobOne.createBlob(this.canvas.nativeElement, '#f56f4f', 'blob-one', 136, 180, 180)
        );
    }

    projectHover() {
        this.isOverflown(this.overlayTitle);
    }

    ngOnDestroy() {}

    // listen to event from single project
    toggleChildComponent(index) {
        this.delete = !this.delete;

        this.singleProject = this.singleProjects[index];
    }

    isOverflown(element) {
        let parentWidth = element.target.clientWidth;
        let elementWidth = element.target.firstElementChild.clientWidth;
        let widthDelta = elementWidth - parentWidth;

        element.target.firstElementChild.style.background = `linear-gradient(to right, #006b64 ${
            widthDelta / 2
        }px, #ffffff ${widthDelta / 2}px, #ffffff ${parentWidth}px, #ffffff ${
            parentWidth + widthDelta / 2
        }px, #006b64 ${parentWidth + widthDelta / 2}px )`;
        element.target.firstElementChild.style.webkitTextFillColor = 'transparent';
        element.target.firstElementChild.style.webkitBackgroundClip = 'text';

        // if subtitle is outside of container div
        element.target.firstElementChild.clientHeight > element.target.clientHeight
            ? (element.target.lastElementChild.style.color = '#006b64')
            : (element.target.lastElementChild.style.color = 'white');
    }
}
