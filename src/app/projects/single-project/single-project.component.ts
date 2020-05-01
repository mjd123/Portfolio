import {
    Component,
    OnInit,
    OnDestroy,
    Output,
    EventEmitter,
    Input,
    ViewChild,
    ElementRef,
    Renderer2,
} from '@angular/core';
import { TweenMax, TimelineMax } from 'gsap';

import ScrollMagic from 'ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

@Component({
    selector: 'app-single-project',
    templateUrl: './single-project.component.html',
    styleUrls: ['./single-project.component.scss'],
})
export class SingleProjectComponent implements OnInit {
    @Output() delete: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() projectsData;
    @Input() projectsContainer: HTMLElement;
    @ViewChild('singleProjectContainer', { static: true })
    singleProjectContainer: ElementRef;
    controller = new ScrollMagic.Controller();

    constructor(private renderer: Renderer2, private el: ElementRef) {}

    ngOnInit() {
        console.log(this.singleProjectContainer);

        // change negitive to positive and convert to number

        // if screen size is less than 420 do not turn into negative number
        // let projectContainerTop =
        //     this.projectsContainer.getBoundingClientRect().top < 0
        //         ? Math.abs(this.projectsContainer.getBoundingClientRect().top)
        //         : -Math.abs(this.projectsContainer.getBoundingClientRect().top);

        // // make sure overlay div is lined up to screen top
        // this.renderer.setStyle(
        //     this.el.nativeElement.children[0],
        //     'top',
        //     `${projectContainerTop}px`
        // );

        // stop user being able to scroll
        this.renderer.addClass(document.body, 'no-scroll');
        this.renderer.addClass(this.singleProjectContainer.nativeElement, 'no-scroll');
        this.renderer.setStyle(document, 'overflow-y', 'hidden');
    }

    ngAfterViewInit() {}

    ngOnDestroy() {
        // reset all
        this.projectsData = {};
        this.renderer.removeClass(document.body, 'no-scroll');
        this.renderer.removeClass(this.singleProjectContainer.nativeElement, 'no-scroll');
    }

    close() {
        // pass close event back to parent component
        this.delete.emit(true);
    }
}
