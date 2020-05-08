import { BlobService } from './../blob.service';
import {
    Component,
    OnInit,
    NgZone,
    ElementRef,
    ViewChild,
    ViewChildren,
    QueryList,
} from '@angular/core';
import { CanvasBlob } from '../animations/blob-canvas-animation';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    @ViewChildren('canvas') canvas: QueryList<any>;

    constructor(
        private BlobService: BlobService,
        private ngZone: NgZone,
        private CanvasBlob: CanvasBlob
    ) {}

    ngOnInit() {}

    ngAfterViewInit() {
        console.log('in here', this.canvas);

        let blobOne = new CanvasBlob();
        let blobTwo = new CanvasBlob();

        this.ngZone.runOutsideAngular(() =>
            blobOne.createBlob(
                this.canvas.first.nativeElement,
                'rgba(245,111,79,1)',
                'blob-one',
                136,
                180,
                180,
                0,
                0,
                0.3
            )
        );
        this.ngZone.runOutsideAngular(() =>
            blobTwo.createBlob(
                this.canvas.last.nativeElement,
                'rgba(245,111,79,0.9)',
                'blob-one',
                136,
                180,
                180,
                0,
                0,
                0.2
            )
        );
    }
}
