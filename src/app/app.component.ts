import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "portfolio";

  ngOnInit() {}
  scroll = (event): void => {
    // console.log(event.documentElement);
    //handle your scroll here
    //notice the 'odd' function assignment to a class field
    //this is used to be able to remove the event listener
  };
}
