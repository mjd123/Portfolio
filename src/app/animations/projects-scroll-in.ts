// this.width = window.innerWidth;
// this.height = window.innerHeight;
// this.elementChildren = this.projects.last.nativeElement.children;

// this.projectsContainer = this.projects.last.nativeElement;

// const projectsText = this.projectsText.nativeElement.getBoundingClientRect();

// const finalProjectTextWidth: any = (projectsText.width * 0.1).toFixed(0);

// let tweens = {
//     headerColorFadeOut: TweenMax.to('body, .app-content, header, .projects', 300, {
//         backgroundColor: '#f5eee2',
//         //opacity: 1,
//         ease: 'Power1.easeOut',
//     }),
//     projectsColorFadeOut: TweenMax.to('.projects ,body,.app-content, .about ', 300, {
//         backgroundColor: '#006b64',
//         //opacity: 1,
//         ease: 'Power1.easeOut',
//     }),
//     overlayTextChangeTitle: TweenMax.to('.project-container .overlay .title', 300, {
//         fontSize: '30',
//         //opacity: 1,
//         ease: 'Power1.easeOut',
//     }),
//     overlayTextChangeSubTitle: TweenMax.to('.project-container .overlay .sub-title', 300, {
//         fontSize: '16',
//         //opacity: 1,
//         ease: 'Power1.easeOut',
//     }),
//     overlayBorderChangeSubTitle: TweenMax.to('.project-container .overlay', 300, {
//         border: '1px solid black',
//         //opacity: 1,
//         ease: 'Power1.easeOut',
//     }),
//     // start of projects sliding in
//     startTween: TweenMax.to('.projects-text', 800, {
//         scale: 0.3,
//         opacity: 0,
//         ease: 'Linear.easeNone',
//     }),
//     wipeAnimations: [
//         new TimelineMax().fromTo(
//             '.one',
//             1000,
//             { x: this.width - this.elementChildren[2].clientWidth / 2, y: -50 },
//             {
//                 scale: 1,
//                 z: -1500,
//                 x:
//                     this.width > 900
//                         ? this.width / 2 + 30 // center with 30px margin
//                         : this.width / 2 - this.elementChildren[2].clientWidth + 60 - 30,
//                 y: this.width > 900 ? 80 : 20,
//                 ease: 'Linear.easeNone',
//             }
//         ),
//         new TimelineMax().fromTo(
//             '.two',
//             1000,
//             { x: 0 - this.width - this.elementChildren[3].clientWidth, y: 0 },
//             {
//                 scale: 1,
//                 z: -1500,
//                 x:
//                     this.width > 900
//                         ? this.width / 2 - this.elementChildren[3].clientWidth - 30
//                         : this.width / 2 - 60 - 30,
//                 y: this.width > 900 ? 80 : this.elementChildren[2].clientHeight - 30 + 20,
//                 ease: 'Linear.easeNone',
//             }
//         ),
//         new TimelineMax().fromTo(
//             '.three',
//             1000,
//             {
//                 x:
//                     this.width > 900
//                         ? this.width - this.elementChildren[4].clientWidth / 4
//                         : this.width - this.elementChildren[4].clientWidth / 10,
//                 y: this.height - 30 + 20,
//             },
//             {
//                 scale: 1,
//                 z: -1500,
//                 x:
//                     this.width > 900
//                         ? this.width / 2 - this.elementChildren[4].clientWidth - 30
//                         : this.width / 2 - this.elementChildren[4].clientWidth + 60 - 30,
//                 y:
//                     this.width > 900
//                         ? this.elementChildren[3].clientHeight + 80 + 30 // 2nd project height + padding top of projects container + margin between 2nd and 3rd project
//                         : this.elementChildren[2].clientHeight +
//                           this.elementChildren[3].clientHeight -
//                           60 +
//                           20,
//                 ease: 'Linear.easeNone',
//             }
//         ),
//         new TimelineMax().fromTo(
//             '.four',
//             1000,
//             {
//                 x: this.width + this.elementChildren[4].clientWidth * 2,
//                 y: this.height - 50,
//             },
//             {
//                 scale: 1,
//                 z: -1500,
//                 x: this.width > 900 ? this.width / 2 + 30 : this.width / 2 - 60 - 30, // on mobile center -  padding - margin for overlap
//                 y:
//                     this.width > 900
//                         ? this.elementChildren[2].clientHeight + 80 + 30 // 1st project height + padding top of projects container + margin between 1st and 4th project
//                         : this.elementChildren[2].clientHeight +
//                           this.elementChildren[3].clientHeight +
//                           this.elementChildren[4].clientHeight -
//                           90 +
//                           20,
//                 ease: 'Linear.easeNone',
//             }
//         ),
//     ],
// };
// let timeline = new TimelineMax();
// let timelineTwo = new TimelineMax();

// timeline.add([tweens.headerColorFadeOut]);
// timelineTwo.add([
//     tweens.projectsColorFadeOut,
//     tweens.overlayTextChangeTitle,
//     tweens.overlayTextChangeSubTitle,
//     tweens.overlayBorderChangeSubTitle,
// ]);

// // header color fade
// new ScrollMagic.Scene({
//     triggerHook: 0,
//     duration: 800, // the scene should last for a scroll distance of 100px
//     offset: this.width > 900 ? 200 : 0, // start this scene after scrolling for 50px
// })
//     .addIndicators()
//     .setTween(timeline)

//     //.setPin('.projects-text, .projects') // pins the element for the the scene's duration
//     .addTo(this.controller); // assign the scene to the controller

// //container
// new ScrollMagic.Scene({
//     triggerElement: '.projects',
//     duration: this.width > 900 ? this.height * 2.1 : this.height * 1.8, // the scene should last for a scroll distance of 100px
//     offset: this.width > 900 ? 550 : this.height / 2, // start this scene after scrolling for 50px
// })
//     .addIndicators()
//     .setTween(tweens.startTween)

//     .setPin('.projects-text, .projects') // pins the element for the the scene's duration
//     .addTo(this.controller); // assign the scene to the controller

// // text scale
// new ScrollMagic.Scene({
//     triggerElement: '.projects',
//     duration: this.width > 900 ? this.height * 2 : this.height, // the scene should last for a scroll distance of 100px
//     offset: this.width > 900 ? 550 : 600, // start this scene after scrolling for 50px
// })
//     .addIndicators()
//     .setTween(tweens.startTween)

//     //.setPin(".projects-text, .projects") // pins the element for the the scene's duration
//     .addTo(this.controller); // assign the scene to the controller

// // project image
// new ScrollMagic.Scene({
//     triggerElement: '.projects',
//     duration: this.width > 900 ? this.height : this.height, // the scene should last for a scroll distance of 100px
//     offset: this.width > 900 ? 800 : 500, // start this scene after scrolling for 50px
// })
//     .addIndicators()
//     .setTween(tweens.wipeAnimations[0])
//     .addTo(this.controller); // assign the scene to the controller

// // project image
// new ScrollMagic.Scene({
//     triggerElement: '.projects',
//     duration: this.width > 900 ? this.height : this.height, // the scene should last for a scroll distance of 100px
//     offset: this.width > 900 ? 800 : 500, // start this scene after scrolling for 50px
// })
//     .addIndicators()
//     .setTween(tweens.wipeAnimations[1])
//     .addTo(this.controller); // assign the scene to the controller

// // project image
// new ScrollMagic.Scene({
//     triggerElement: '.projects',
//     duration: this.width > 900 ? this.height : this.height, // the scene should last for a scroll distance of 100px
//     offset: this.width > 900 ? 800 : 500, // start this scene after scrolling for 50px
// })
//     .addIndicators()
//     .setTween(tweens.wipeAnimations[2])
//     .addTo(this.controller); // assign the scene to the controller

// // project image
// new ScrollMagic.Scene({
//     triggerElement: '.projects',
//     duration: this.width > 900 ? this.height : this.height, // the scene should last for a scroll distance of 100px
//     offset: this.width > 900 ? 800 : 500, // start this scene after scrolling for 50px
// })
//     .addIndicators()
//     .setTween(tweens.wipeAnimations[3])
//     .addTo(this.controller); // assign the scene to the controller

// new ScrollMagic.Scene({
//     triggerElement: '.about',
//     duration: 600, // the scene should last for a scroll distance of 100px
//     offset: -200, // start this scene after scrolling for 50px
// })
//     .addIndicators()
//     .setTween(timelineTwo)
//     .addTo(this.controller); // assign the scene to the controller
