import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ProjectsComponent } from "./projects/projects.component";
import { AboutComponent } from "./about/about.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //RouterModule.forRoot([{ path: "", component: HeaderComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
