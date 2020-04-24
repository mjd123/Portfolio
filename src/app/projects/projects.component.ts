import { SingleProjectComponent } from "./single-project/single-project.component";
import { element } from "protractor";
import {
  Component,
  OnInit,
  AfterViewInit,
  HostListener,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
  Input,
  Output,
} from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
//import "imports-loader?define=>false!animation.gsap";

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
  @Input() delete: boolean = true;

  singleProjects: object = {
    project: {
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
  };

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

  constructor() {
    this.ScrollMagic = require("scrollmagic");
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.elementChildren = this.projects.last.nativeElement.children;

    const projectsText = this.projectsText.nativeElement.getBoundingClientRect();

    const finalProjectTextWidth: any = (projectsText.width * 0.3).toFixed(0);
    console.log(this.projectsText.nativeElement.getBoundingClientRect());

    let tweens = {
      startTween: TweenMax.to(".projects-text", 500, {
        scale: 0.3,
        ease: "Linear.easeNone",
      }),
      wipeAnimations: [
        new TimelineMax().fromTo(
          ".one",
          1000,
          { x: this.width + this.elementChildren[1].clientWidth },
          {
            scale: 1,
            z: -1500,
            x: this.width / 2 + finalProjectTextWidth / 2 - 60,
            ease: "Linear.easeNone",
          }
        ),
        new TimelineMax().fromTo(
          ".two",
          1000,
          { x: 0 - this.width - this.elementChildren[2].clientWidth },
          {
            scale: 1,
            z: -1500,
            x:
              this.width / 2 -
              finalProjectTextWidth / 2 -
              this.elementChildren[2].clientWidth +
              60,
            ease: "Linear.easeNone",
          }
        ),
        new TimelineMax().fromTo(
          ".three",
          1000,
          {
            x: 0 - this.width - this.elementChildren[3].clientWidth,
            y: "100%",
          },
          {
            scale: 1,
            z: -1500,
            x:
              this.width / 2 -
              finalProjectTextWidth / 2 -
              this.elementChildren[3].clientWidth / 2,
            y: 0,
            ease: "Linear.easeNone",
          }
        ),
        new TimelineMax().fromTo(
          ".four",
          1000,
          { x: this.width + this.elementChildren[3].clientWidth, y: "80%" },
          {
            scale: 1,
            z: -1500,
            x: this.width / 2 + finalProjectTextWidth / 4 - 60,
            y: 0,
            ease: "Linear.easeNone",
          }
        ),
      ],
    };

    //containeing
    new ScrollMagic.Scene({
      triggerElement: ".projects",
      duration: 3100, // the scene should last for a scroll distance of 100px
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
      duration: 2800, // the scene should last for a scroll distance of 100px
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
  }

  ngOnDestroy() {}

  scrollEvent = (event: any): void => {
    const element = this.projectsText.nativeElement;
    const windowHeight = event.path[1].innerHeight;
    const elementHeight = element.getBoundingClientRect().height;
    let elementTop = element.getBoundingClientRect().top;

    if (event.path[1].scrollY >= elementTop + 720 - windowHeight) {
      element.style.transform = `scale(${
        3 / (event.path[1].scrollY / (1263 - windowHeight))
      })`;

      // console.log(
      //   "start growing text",
      //   3 / (event.path[1].scrollY / (1263 - windowHeight))
      // );
      document.body.className = "no-scroll";
      event.preventDefault();
      event.stopPropagation();
      return;
      //this.isOpen = false;
    }
  };

  // listen to event from single project
  removeChildComponent(event) {
    this.delete = event;
  }
}