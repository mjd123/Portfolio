import projectData from '../../assets/project-data/projects.json';

import {
    Component,
    ElementRef,
    ViewChild,
    ViewChildren,
    QueryList,
    Input,
    NgZone,
} from '@angular/core';

import { CanvasBlob } from '../animations/blob-canvas-animation';
import { TweenMax, TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
//import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

import { Observable, of, from, fromEvent, Subscription, Subject, timer, observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent extends CanvasBlob {
    @ViewChild('projectsText', { static: true }) projectsText: ElementRef;
    @ViewChildren('projects') projects: QueryList<ElementRef>;
    @ViewChild('canvas', { static: true }) canvas: ElementRef;
    @ViewChildren('overlayTitle') overlayTitle: ElementRef;
    @Input() delete: boolean = true;

    projectsContainer: HTMLElement;
    singleProjects: any = projectData;
    singleProject: any;
    currentSingleProjectIndex: any;

    controller = new ScrollMagic.Controller();
    width: number;
    height: number;
    elementChildren: Array<any>;
    selectedEl;
    private subscription: Subscription = new Subscription();

    constructor(private el: ElementRef, private ngZone: NgZone) {
        super();
    }

    ngOnInit() {}

    ngAfterViewInit() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        let blobOne = new CanvasBlob();

        this.ngZone.runOutsideAngular(() =>
            blobOne.createBlob(
                this.canvas.nativeElement,
                '#f56f4f',
                'blob-one',
                136,
                180,
                190,
                10,
                10
            )
        );

        // grab button reference
        const overlay = document.getElementsByClassName('overlay');
        const imgs = document.querySelector('.project-container img');

        // subscribe to events
        this.subscription.add(
            fromEvent(overlay, 'mouseenter').subscribe((event) => this.isOverflown(event))
        );

        this.subscription.add(
            fromEvent(imgs, 'load')
                .pipe(delay(200))
                .subscribe((event) => this.onImageLoad())
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    // projectHover() {
    //     this.isOverflown(this.overlayTitle);
    // }

    // wait for image to load before getting height and width
    onImageLoad() {
        this.elementChildren = this.projects.first.nativeElement.children;
        this.projectsContainer = this.projects.last.nativeElement;

        const tweens = {
            headerColorFadeOut: TweenMax.to('body, .app-content, header, .projects', 300, {
                backgroundColor: '#f5eee2',
                immediateRender: false,
            }),
            projectsColorFadeOut: TweenMax.to('.projects ,body,.app-content, .about ', 300, {
                backgroundColor: '#006b64',
                immediateRender: false,
            }),

            // start of projects sliding in
            startTween: TweenMax.to('.projects-text', 800, {
                opacity: 0,
                overwrite: 'auto',
                immediateRender: false,
            }),
            wipeAnimations: [
                new TimelineMax().fromTo(
                    '.one',
                    8000,
                    {
                        x: this.width - this.elementChildren[2].clientWidth / 2,
                        y: -50,
                        scale: 1.5,
                    },
                    {
                        scale: 1,

                        x: this.findX('right', 0, this.elementChildren[2].clientWidth, 15),

                        y: this.findY(
                            this.elementChildren[3].clientHeight +
                                this.elementChildren[2].clientHeight -
                                48,
                            0,
                            0,
                            80,
                            0
                        ),
                        overwrite: false,
                    }
                ),
                new TimelineMax().fromTo(
                    '.two',
                    1000,
                    {
                        x: 0 - this.width - this.elementChildren[3].clientWidth,
                        y: 0,
                        scale: 2,
                    },
                    {
                        scale: 1,

                        x: this.findX(
                            'left',
                            this.elementChildren[2].clientWidth + 20,
                            this.elementChildren[3].clientWidth,
                            15
                        ),

                        y: this.findY(this.elementChildren[3].clientHeight - 24, 0, 0, 80, 30),
                        overwrite: false,
                    }
                ),
                new TimelineMax().fromTo(
                    '.three',
                    500,
                    {
                        x:
                            this.width > 900
                                ? this.width - this.elementChildren[4].clientWidth / 4
                                : this.width - this.elementChildren[4].clientWidth / 10,
                        y: this.height - 30 + 20,
                        scale: 1.25,
                    },
                    {
                        scale: 1,

                        x:
                            this.width > 900
                                ? this.width / 2 - this.elementChildren[4].clientWidth - 15
                                : this.height < 500 && this.width < 850
                                ? this.elementChildren[2].clientWidth +
                                  this.elementChildren[3].clientWidth +
                                  22.5 * 2
                                : this.width / 2 - this.elementChildren[4].clientWidth + 60 - 30,
                        y: this.findY(0, this.elementChildren[3].clientHeight, 30, 80, 60),
                        overwrite: false,
                    }
                ),
                new TimelineMax().fromTo(
                    '.four',
                    2500,
                    {
                        x: this.width + this.elementChildren[4].clientWidth * 2,
                        y: this.height - 50,
                        scale: 2,
                    },
                    {
                        scale: 1,

                        x: this.findX(
                            this.width > 900 ? 'right' : 'left',
                            this.elementChildren[4].clientWidth +
                                this.elementChildren[3].clientWidth +
                                this.elementChildren[2].clientWidth +
                                22.5 * 3,
                            0,
                            15
                        ),
                        y: this.findY(
                            0 - this.elementChildren[4].clientHeight + 24,
                            this.elementChildren[2].clientHeight,
                            30,
                            80,
                            90
                        ),
                        overwrite: false,
                    }
                ),
            ],
        };

        this.scrollMagicInit(tweens);
    }

    findX(sideOfScreen, landscapePos, elementWidth?, margin?) {
        //landscape phones
        if (this.width < 850 && this.height < 500) {
            return 0 + landscapePos;
        }

        if (sideOfScreen === 'right') {
            if (this.width > 900) {
                return this.width / 2 + margin;
            } else {
                return this.width / 2 - elementWidth + 60 - 30;
            }
        }

        if (sideOfScreen === 'left') {
            if (this.width > 900) {
                return this.width / 2 - elementWidth - margin;
            } else {
                return this.width / 2 - 60 - 30;
            }
        }
    }

    findY(row, elementHeight, top, margin, overlap, sideOfScreen?) {
        //landscape phones
        if (this.width < 850 && this.height < 500) {
            return 0;
        }
        if (this.height < 650 && this.width > 900) {
            return elementHeight + margin + top + 60;
        }

        if (this.width > 900) {
            return elementHeight + margin + top + 30;
        } else {
            return this.height / 2 - row;
        }
    }

    // all the scrollMagic stuff
    scrollMagicInit(tweens) {
        let timeline = new TimelineMax();
        let timelineTwo = new TimelineMax();

        timeline.add([tweens.headerColorFadeOut]);
        timelineTwo.add([tweens.projectsColorFadeOut]);

        // header color fade
        new ScrollMagic.Scene({
            triggerHook: 0,
            duration: 800, // the scene should last for a scroll distance of 100px
            offset: this.width > 900 ? 200 : 0, // start this scene after scrolling for 50px
        })
            //.addIndicators()
            .setTween(timeline)
            .addTo(this.controller); // assign the scene to the controller

        //container
        new ScrollMagic.Scene({
            triggerElement: '.projects',
            duration:
                this.width > 900
                    ? this.height * 2.1
                    : this.height < 500
                    ? this.height * 2.5
                    : this.height * 1.6, // the scene should last for a scroll distance of 100px
            offset: this.width > 900 ? 550 : this.height / 2, // start this scene after scrolling for 50px
        })
            //.addIndicators()
            .setTween(tweens.startTween)
            .setPin('.projects-text, .projects') // pins the element for the the scene's duration
            .addTo(this.controller); // assign the scene to the controller

        // text scale
        new ScrollMagic.Scene({
            triggerElement: '.projects',
            duration: this.width > 900 ? this.height * 1.5 : this.height, // the scene should last for a scroll distance of 100px
            offset: this.width > 900 ? 550 : 600, // start this scene after scrolling for 50px
        })
            //.addIndicators()
            .setTween(tweens.startTween)
            .addTo(this.controller); // assign the scene to the controller

        // project image
        new ScrollMagic.Scene({
            triggerElement: '.projects',
            duration: this.width > 900 ? this.height : this.height, // the scene should last for a scroll distance of 100px
            offset: this.width > 900 ? 800 : 500, // start this scene after scrolling for 50px
        })
            //.addIndicators()
            .setTween(tweens.wipeAnimations[0])
            .addTo(this.controller); // assign the scene to the controller

        // project image
        new ScrollMagic.Scene({
            triggerElement: '.projects',
            duration: this.width > 900 ? this.height : this.height, // the scene should last for a scroll distance of 100px
            offset: this.width > 900 ? 800 : 500, // start this scene after scrolling for 50px
        })
            //.addIndicators()
            .setTween(tweens.wipeAnimations[1])
            .addTo(this.controller); // assign the scene to the controller

        // project image
        new ScrollMagic.Scene({
            triggerElement: '.projects',
            duration: this.width > 900 ? this.height : this.height, // the scene should last for a scroll distance of 100px
            offset: this.width > 900 ? 700 : 500, // start this scene after scrolling for 50px
        })
            //.addIndicators()
            .setTween(tweens.wipeAnimations[2])
            .addTo(this.controller); // assign the scene to the controller

        // project image
        new ScrollMagic.Scene({
            triggerElement: '.projects',
            duration: this.width > 900 ? this.height : this.height, // the scene should last for a scroll distance of 100px
            offset: this.width > 900 ? 800 : 500, // start this scene after scrolling for 50px
        })
            //.addIndicators()
            .setTween(tweens.wipeAnimations[3])
            .addTo(this.controller); // assign the scene to the controller

        new ScrollMagic.Scene({
            triggerElement: '.about',
            duration: 600, // the scene should last for a scroll distance of 100px
            offset: -200, // start this scene after scrolling for 50px
        })
            //.addIndicators()
            .setTween(timelineTwo)
            .addTo(this.controller); // assign the scene to the controller
    }

    // listen to event from single project to close it or decide what data it should hold
    toggleChildComponent(event, index?) {
        let tl = new TimelineMax();

        // if delete is true single projects is closed, the single projects then need to fade in
        if (this.delete) {
            // .project-container
            this.selectedEl = event.currentTarget;

            this.singleProject = this.singleProjects[index];
            this.currentSingleProjectIndex = index;

            //if (this.width > 850) {
            TweenMax.to(this.selectedEl, 0, {
                zIndex: 2,
            });
            // }

            tl.add([
                TweenMax.to(this.selectedEl.children[0].children, 0, {
                    opacity: 0,
                    visibility: 'hidden',
                }),
                TweenMax.to(this.selectedEl.children[0], 0.1, {
                    visibility: 'visible',
                    opacity: 1,
                    scale: 10,
                    height: '100vh',
                    onComplete: function () {
                        setTimeout(() => {
                            this.delete = !this.delete;
                        }, 200);
                    },
                    callbackScope: this,
                }),
            ]);
        } else {
            this.delete = !this.delete;

            TweenMax.to(this.selectedEl.children[0], 0, {
                scale: 1,
                onComplete: function () {
                    TweenMax.set(this.selectedEl.children[0], { clearProps: 'height' });
                    TweenMax.set(this.selectedEl.children[0], { clearProps: 'opacity' });
                    TweenMax.set(this.selectedEl.children[0], { clearProps: 'visibility' });
                    TweenMax.set(this.selectedEl.children[0].children, { clearProps: 'opacity' });
                    TweenMax.set(this.selectedEl.children[0].children, {
                        clearProps: 'visibility',
                    });

                    setTimeout(() => {
                        TweenMax.set(this.selectedEl, {
                            clearProps: 'zIndex',
                        });
                    }, 400);
                },
                callbackScope: this,
            });
        }
    }

    // when user clicks next or prev on single projects component -- work out what project to show
    nextChildComponent(event): void {
        // turn object into useable array
        const entries: any = Object.entries(this.singleProjects);

        // next and prev projects
        // index of projects
        let sp = this.singleProjects[this.currentSingleProjectIndex]['index'] + 1;
        let negSP = this.singleProjects[this.currentSingleProjectIndex]['index'] - 1;

        // loop though object find useful info and conditionally extract
        for (const value of entries) {
            if (event) {
                if (value[1].index === sp) {
                    this.currentSingleProjectIndex = value[0];
                    this.singleProject = value[1];
                } else if (sp >= 3) {
                    this.currentSingleProjectIndex = 'saffron';
                    this.singleProject = this.singleProjects['saffron'];
                }
            } else {
                if (value[1].index === negSP) {
                    this.currentSingleProjectIndex = value[0];
                    this.singleProject = value[1];
                } else if (negSP <= 0) {
                    this.currentSingleProjectIndex = 'saffron';
                    this.singleProject = this.singleProjects['saffron'];
                }
            }
        }
    }
    // if overlay text overflows element, change color of part of text that s overflown
    isOverflown(event) {
        let parentWidth = event.target.clientWidth;
        let elementWidth = event.target.firstElementChild.clientWidth;
        let widthDelta = elementWidth - parentWidth;

        event.target.firstElementChild.style.background = `linear-gradient(to right, #006b64 ${
            widthDelta / 2
        }px, #ffffff ${widthDelta / 2}px, #ffffff ${parentWidth}px, #ffffff ${
            parentWidth + widthDelta / 2
        }px, #006b64 ${parentWidth + widthDelta / 2}px )`;
        event.target.firstElementChild.style.webkitTextFillColor = 'transparent';
        event.target.firstElementChild.style.webkitBackgroundClip = 'text';

        // if subtitle is outside of container div
        event.target.firstElementChild.clientHeight > event.target.clientHeight
            ? (event.target.lastElementChild.style.color = '#006b64')
            : (event.target.lastElementChild.style.color = 'white');
    }
}
