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

    ngOnInit() {
        // this.BlobService.blobAnimation(
        //   "#path",
        //   "M37.7 16.735C66.84-11.387 99.759-3.5 122.754 36.13c22.996 39.632 15.358 64.027-17.52 98.572-32.877 34.546-75.112 65.515-96.52 28.618-21.409-36.897-.15-118.465 28.988-146.586zZ",
        //   "M97.4,-66.3C129,-37.9,159.6,2.6999999999999993,159.6,49.9C159.6,97.1,129,150.8,82,175.4C35,200,-28.5,195.5,-80.8,169.6C-133.1,143.7,-174.3,96.5,-185.3,43.6C-196.3,-9.2,-177.1,-67.6,-141.2,-96.9C-105.3,-126.3,-52.6,-126.6,-9.9,-118.8C32.8,-110.9,65.7,-94.7,97.4,-66.3Z",
        //   "M97.4,-66.3C129,-37.9,159.6,2.6999999999999993,159.6,49.9C159.6,97.1,129,150.8,82,175.4C35,200,-28.5,195.5,-80.8,169.6C-133.1,143.7,-174.3,96.5,-185.3,43.6C-196.3,-9.2,-177.1,-67.6,-141.2,-96.9C-105.3,-126.3,-52.6,-126.6,-9.9,-118.8C32.8,-110.9,65.7,-94.7,97.4,-66.3Z",
        //   "M97.4,-66.3C129,-37.9,159.6,2.6999999999999993,159.6,49.9C159.6,97.1,129,150.8,82,175.4C35,200,-28.5,195.5,-80.8,169.6C-133.1,143.7,-174.3,96.5,-185.3,43.6C-196.3,-9.2,-177.1,-67.6,-141.2,-96.9C-105.3,-126.3,-52.6,-126.6,-9.9,-118.8C32.8,-110.9,65.7,-94.7,97.4,-66.3Z",
        //   3000
        // );
        //console.clear();
    }

    ngAfterViewInit() {
        let blobOne = new CanvasBlob();
        let blobTwo = new CanvasBlob();
        this.ngZone.runOutsideAngular(() =>
            blobOne.createBlob(this.canvas.nativeElement, '#f56f4f', 'blob-one', 136, 180, 180)
        );

        this.ngZone.runOutsideAngular(() =>
            blobTwo.createBlob(
                this.canvas.nativeElement,
                'rgba(245,111,79,0.8)',
                'blob-two',
                136,
                180,
                180
            )
        );
    }
}
