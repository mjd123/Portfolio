import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'portfolio';
    // @HostListener('window:resize', ['$event'])
    // onResize(event) {
    //     location.reload();
    // }

    ngOnInit() {}
}
