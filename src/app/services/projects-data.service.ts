import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ProjectsDataService {
    constructor() {}

    singleProjects: any = [
        {
            text: {
                title: 'El pastor',
                subTitle: 'javascript • css • website',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            image: {
                src: 'https://via.placeholder.com/460',
                alt: 'picture of project',
                url: '1',
            },
        },
        {
            text: {
                title: 'Creative Family',
                subTitle: 'javascript • css • website',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
            image: {
                src: 'https://via.placeholder.com/460',
                alt: 'picture of project',
                url: '1',
            },
        },
    ];
}
