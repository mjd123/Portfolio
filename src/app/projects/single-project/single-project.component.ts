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
import {
    trigger,
    state,
    style,
    animate,
    transition,
    animateChild,
    group,
    query,
} from '@angular/animations';

@Component({
    selector: 'app-single-project',
    templateUrl: './single-project.component.html',
    styleUrls: ['./single-project.component.scss'],
    animations: [
        trigger('fade', [
            state('visible', style({ opacity: 1 })),
            state('hidden', style({ opacity: 0 })),
            transition(':enter', [animate(600)]),
            transition('visible <=> hidden', [animate(600)]),
        ]),
    ],
})
export class SingleProjectComponent implements OnInit {
    @Output() delete: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() projectsData;
    @Input() projectsContainer: HTMLElement;
    @ViewChild('singleProjectContainer', { static: true })
    singleProjectContainer: ElementRef;
    @Output() changeProject: EventEmitter<boolean> = new EventEmitter<boolean>();
    fade: string = 'visible';
    fadeVideo: string;

    constructor(private renderer: Renderer2) {}

    ngOnInit() {
        // stop user being able to scroll
        this.renderer.addClass(document.body, 'no-scroll');
        this.renderer.addClass(this.singleProjectContainer.nativeElement, 'no-scroll');
        this.renderer.addClass(this.projectsContainer, 'no-scroll');
        this.renderer.setStyle(document.documentElement, 'overflow-y', 'hidden');
    }

    ngAfterViewInit() {}

    ngOnDestroy() {
        // reset all

        this.projectsData = {};
        this.renderer.removeClass(document.body, 'no-scroll');
        this.renderer.removeClass(this.singleProjectContainer.nativeElement, 'no-scroll');
        this.renderer.removeStyle(document.documentElement, 'overflow-y');
    }

    close() {
        this.fade = 'hidden';

        // pass close event back to parent component
        setTimeout(() => {
            this.delete.emit(true);
        }, 300);
    }

    nextProject() {
        this.fade = 'hidden';
        this.fadeVideo = 'hidden';

        setTimeout(() => {
            this.fade = 'visible';

            this.changeProject.emit(true);
            // change video with project info
            this.singleProjectContainer.nativeElement.children[0].children[1].load();
        }, 700);
    }

    prevousProject() {
        this.fade = 'hidden';
        this.fadeVideo = 'hidden';

        setTimeout(() => {
            this.fade = 'visible';
            this.changeProject.emit(false);
            // change video with project info
            this.singleProjectContainer.nativeElement.children[0].children[1].load();
        }, 700);
    }

    videoLoad() {
        this.fadeVideo = 'visible';
    }
}
