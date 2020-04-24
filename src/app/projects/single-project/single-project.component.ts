import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-single-project",
  templateUrl: "./single-project.component.html",
  styleUrls: ["./single-project.component.scss"],
})
export class SingleProjectComponent implements OnInit {
  @Output() delete: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() myData;
  constructor() {}

  ngOnInit() {
    console.log(this.myData);
  }

  ngAfterViewInit() {
    console.log(this.myData);
  }

  close() {
    this.delete.emit(true);
  }
}
