import { CanvasBlob } from "./animations/blob-canvas-animation";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ProjectsComponent } from "./projects/projects.component";
import { AboutComponent } from "./about/about.component";
import { SingleProjectComponent } from "./projects/single-project/single-project.component";

import { NgxPageScrollCoreModule } from "ngx-page-scroll-core";
import { NgxPageScrollModule } from "ngx-page-scroll";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    AboutComponent,
    SingleProjectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPageScrollCoreModule.forRoot({ duration: 500 }),
    NgxPageScrollModule,
    //RouterModule.forRoot([{ path: "", component: HeaderComponent }]),
  ],
  providers: [CanvasBlob],
  bootstrap: [AppComponent],
})
export class AppModule {}
