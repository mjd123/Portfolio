import { Component, HostListener } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'portfolio';
    resizeObservable$: Observable<any>;
    resizeSubscription$: Subscription;
    private windowwWidth = window.innerWidth;

    ngOnInit() {
        this.resizeObservable$ = fromEvent(window, 'resize');
        this.resizeSubscription$ = this.resizeObservable$
            .pipe(
                //debounceTime(500),
                map((e) => {
                    return e.target.innerWidth; // <-- target does not exist on {}
                })
            )
            .subscribe((evt) => {
                if (this.windowwWidth !== evt) {
                    location.reload();
                }
            });
    }

    ngOnDestroy() {
        this.resizeSubscription$.unsubscribe();
    }
}
