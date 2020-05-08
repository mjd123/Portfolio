import {
    Component,
    OnInit,
    ViewChild,
    ViewChildren,
    ElementRef,
    NgZone,
    QueryList,
} from '@angular/core';
import { CanvasBlob } from '../animations/blob-canvas-animation';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @ViewChild('canvas', { static: true })
    canvas: ElementRef;
    @ViewChildren('slide') slides: QueryList<ElementRef>;

    constructor(private ngZone: NgZone, private CanvasBlob: CanvasBlob) {}

    ngOnInit() {}

    ngAfterViewInit() {
        let blobOne = new CanvasBlob();
        let blobTwo = new CanvasBlob();
        this.ngZone.runOutsideAngular(() =>
            blobOne.createBlob(
                this.canvas.nativeElement,
                '#f56f4f',
                'blob-one',
                136,
                180,
                180,
                10,
                10,
                0.2
            )
        );

        this.ngZone.runOutsideAngular(() =>
            blobTwo.createBlob(
                this.canvas.nativeElement,
                'rgba(245,111,79,0.8)',
                'blob-two',
                136,
                180,
                180,
                0,
                0,
                0.25
            )
        );
    }
}
