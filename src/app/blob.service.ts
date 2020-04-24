import { element } from "protractor";
import { Injectable } from "@angular/core";
import Snap from "snapsvg-cjs";
declare var mina: any;

@Injectable({
  providedIn: "root",
})
export class BlobService {
  constructor() {}

  blobAnimation(element, pathOne, pathTwo, pathThree, pathFour, speed: number) {
    let path = Snap.select(`${element}`);

    animationOne();
    function animationOne() {
      path.animate(
        {
          d: pathOne,
        },
        speed,
        mina.linear,
        animationTwo
      );
    }

    function animationTwo() {
      path.animate(
        {
          d: pathTwo,
        },
        speed,
        mina.linear,
        animationThree
      );
    }

    function animationThree() {
      path.animate(
        {
          d: pathThree,
        },
        speed,
        mina.linear,
        animationFour
      );
    }

    function animationFour() {
      path.animate(
        {
          d: pathFour,
        },
        speed,
        mina.linear,
        animationOne
      );
    }
  }
}
