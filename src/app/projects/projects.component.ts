import { SingleProjectComponent } from "./single-project/single-project.component";
import { element } from "protractor";
import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  HostListener,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
  Input,
  Renderer2,
  NgZone,
} from "@angular/core";

import { CanvasBlob } from "../animations/blob-canvas-animation";

import { TweenMax, TimelineMax } from "gsap";

import ScrollMagic from "ScrollMagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

//import { TweenLite } from "gsap";
//import { ScrollToPlugin } from "gsap/ScrollToPlugin";
//import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
  animations: [],
})
export class ProjectsComponent implements OnInit {
  @ViewChild("projectsText", { static: true }) projectsText: ElementRef;
  @ViewChildren("projects") projects: QueryList<any>;
  @ViewChild("canvas", { static: true }) canvas: ElementRef;
  @ViewChildren("overlayTitle") overlayTitle: ElementRef;
  @Input() delete: boolean = true;
  projectsContainer: HTMLElement;

  singleProjects: any = [
    {
      text: {
        title: "El pastor",
        subTitle: "javascript • css • website",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      image: {
        src: "https://via.placeholder.com/460",
        alt: "picture of project",
        url: "1",
      },
    },
    {
      text: {
        title: "Creative Family",
        subTitle: "javascript • css • website",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      image: {
        src: "https://via.placeholder.com/460",
        alt: "picture of project",
        url: "1",
      },
    },
  ];

  singleProject: any;

  images = [
    "https://via.placeholder.com/460",
    "https://via.placeholder.com/460",
    "https://via.placeholder.com/460",
    "https://via.placeholder.com/460",
  ];

  public ScrollMagic: any;

  controller = new ScrollMagic.Controller();
  width: number;
  height: number;
  elementChildren: Array<any>;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private ngZone: NgZone,
    private CanvasBlob: CanvasBlob
  ) {
    this.ScrollMagic = require("scrollmagic");
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.elementChildren = this.projects.last.nativeElement.children;

    this.projectsContainer = this.projects.last.nativeElement;
    //console.log(this.projectTop, this.projects.first);

    const projectsText = this.projectsText.nativeElement.getBoundingClientRect();

    const finalProjectTextWidth: any = (projectsText.width * 0.1).toFixed(0);

    let tweens = {
      startTween: TweenMax.to(".projects-text", 800, {
        scale: 0.3,
        opacity: 0,
        ease: "Linear.easeNone",
      }),
      wipeAnimations: [
        new TimelineMax().fromTo(
          ".one",
          1000,
          { x: this.width - this.elementChildren[2].clientWidth / 2, y: "0%" },
          {
            scale: 1,
            z: -1500,
            x: this.width / 2 + 30,
            y: "40%",
            ease: "Linear.easeNone",
          }
        ),
        new TimelineMax().fromTo(
          ".two",
          1000,
          { x: 0 - this.width - this.elementChildren[3].clientWidth },
          {
            scale: 1,
            z: -1500,
            x: this.width / 2 - this.elementChildren[3].clientWidth - 30,
            y: "15%",
            ease: "Linear.easeNone",
          }
        ),
        new TimelineMax().fromTo(
          ".three",
          1000,
          {
            x: this.width - this.elementChildren[4].clientWidth / 4,
            y: "160%",
          },
          {
            scale: 1,
            z: -1500,
            x: this.width / 2 - this.elementChildren[4].clientWidth - 30,
            y: "120%",
            ease: "Linear.easeNone",
          }
        ),
        new TimelineMax().fromTo(
          ".four",
          1000,
          { x: this.width + this.elementChildren[5].clientWidth, y: "80%" },
          {
            scale: 1,
            z: -1500,
            x: this.width / 2 + 30,
            y: 0,
            ease: "Linear.easeNone",
          }
        ),
      ],
    };

    //containeing
    new ScrollMagic.Scene({
      triggerElement: ".projects",
      duration: 3200, // the scene should last for a scroll distance of 100px
      offset: 550, // start this scene after scrolling for 50px
    })
      .addIndicators()
      .setTween(tweens.startTween)

      .setPin(".projects-text, .projects") // pins the element for the the scene's duration
      .addTo(this.controller); // assign the scene to the controller

    // text scale
    new ScrollMagic.Scene({
      triggerElement: ".projects",
      duration: 3000, // the scene should last for a scroll distance of 100px
      offset: 550, // start this scene after scrolling for 50px
    })
      .addIndicators()
      .setTween(tweens.startTween)

      //.setPin(".projects-text, .projects") // pins the element for the the scene's duration
      .addTo(this.controller); // assign the scene to the controller

    // project image
    new ScrollMagic.Scene({
      triggerElement: ".projects",
      duration: 2500, // the scene should last for a scroll distance of 100px
      offset: 800, // start this scene after scrolling for 50px
    })
      .addIndicators()
      .setTween(tweens.wipeAnimations[0])
      .addTo(this.controller); // assign the scene to the controller

    // project image
    new ScrollMagic.Scene({
      triggerElement: ".projects",
      duration: 2000, // the scene should last for a scroll distance of 100px
      offset: 800, // start this scene after scrolling for 50px
    })
      .addIndicators()
      .setTween(tweens.wipeAnimations[1])
      .addTo(this.controller); // assign the scene to the controller

    // project image
    new ScrollMagic.Scene({
      triggerElement: ".projects",
      duration: 2200, // the scene should last for a scroll distance of 100px
      offset: 800, // start this scene after scrolling for 50px
    })
      .addIndicators()
      .setTween(tweens.wipeAnimations[2])
      .addTo(this.controller); // assign the scene to the controller

    // project image
    new ScrollMagic.Scene({
      triggerElement: ".projects",
      duration: 2000, // the scene should last for a scroll distance of 100px
      offset: 800, // start this scene after scrolling for 50px
    })
      .addIndicators()
      .setTween(tweens.wipeAnimations[3])
      .addTo(this.controller); // assign the scene to the controller

    let blobOne = new CanvasBlob();

    this.ngZone.runOutsideAngular(() =>
      blobOne.createBlob(
        this.canvas.nativeElement,
        "#f56f4f",
        "blob-one",
        136,
        180,
        180
      )
    );
  }

  projectHover() {
    this.isOverflown(this.overlayTitle);
  }

  ngOnDestroy() {
    console.log("destroying child...");
  }

  // listen to event from single project
  toggleChildComponent(index) {
    this.delete = !this.delete;
    console.log(this.delete, "delete");

    this.singleProject = this.singleProjects[index];

    if (!this.delete) {
      console.log(this.el.nativeElement.children[0].children[0]);

      // this.renderer.setStyle(
      //   this.el.nativeElement.children[0].children[0],
      //   "overflow-y",
      //   "hidden"
      // );
    }
  }

  isOverflown(element) {
    console.log("called", element);

    // let overflownElemts = elements._results
    //   .filter((el) => {
    //     // check if element overflows parent
    //     return (
    //       el.nativeElement.parentElement.clientWidth <
    //         el.nativeElement.clientWidth ||
    //       el.nativeElement.parentElement.clientHeight <
    //         el.nativeElement.clientWidth
    //     );
    //   })
    //   .forEach((element) => {
    let parentWidth = element.target.clientWidth;
    let elementWidth = element.target.firstElementChild.clientWidth;
    let widthDelta = elementWidth - parentWidth;

    element.target.firstElementChild.style.background = `linear-gradient(to right, #006b64 ${
      widthDelta / 2
    }px, #ffffff ${widthDelta / 2}px, #ffffff ${parentWidth}px, #ffffff ${
      parentWidth + widthDelta / 2
    }px, #006b64 ${parentWidth + widthDelta / 2}px )`;
    element.target.firstElementChild.style.webkitTextFillColor = "transparent";
    element.target.firstElementChild.style.webkitBackgroundClip = "text";

    // if subtitle is outside of container div
    element.target.firstElementChild.clientHeight > element.target.clientHeight
      ? (element.target.lastElementChild.style.color = "#006b64")
      : (element.target.lastElementChild.style.color = "white");
    //});
  }
}
