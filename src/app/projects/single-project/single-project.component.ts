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
    @Output() changeProject: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private renderer: Renderer2, private el: ElementRef) {}

    ngOnInit() {
        console.log(this.projectsData);

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
        // pass close event back to parent component
        this.delete.emit(true);
    }

    nextProject() {
        this.changeProject.emit(true);
        // change video with project info
        this.el.nativeElement.children[0].children[0].children[0].load();
    }

    prevousProject() {
        this.changeProject.emit(false);
        // change video with project info
        this.el.nativeElement.children[0].children[0].children[0].load();
    }
}
