import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ProjectsDataService {
    constructor() {}

    singleProjects: any = [
        {
            text: {
                title: 'Saffron Brand Barometer',
                subTitle: 'Wordpress • PHP • javascript • CSS • website',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            image: {
                src: 'assets/saffron.png',
                alt: 'picture of project',
                url: 'https://cbb19.saffron-consultants.com/',
                video: 'assets/saffron.mp4',
            },
        },
        {
            text: {
                title: 'El Pastor',
                subTitle: 'javascript • CSS • website',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            image: {
                src: 'assets/el_pastor.png',
                alt: 'picture of project',
                url: 'https://www.tacoselpastor.co.uk/',
                video: 'assets/elpastor.mp4',
            },
        },
        {
            text: {
                title: 'Creative Family',
                subTitle: 'Wordpress • PHP • javascript • CSS',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            image: {
                src: 'assets/creative_family.png',
                alt: 'picture of project',
                url: 'https://www.creativefamily.com/',
                video: 'assets/creativefamily.mp4',
            },
        },
        {
            text: {
                title: 'One Soho Place',
                subTitle: 'javascript • PHP • CSS • website',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            image: {
                src: 'assets/one_oxford_st.png',
                alt: 'picture of project',
                url: 'https://1sohoplace.london/',
                video: 'assets/sohoplace.mp4',
            },
        },
    ];
}
