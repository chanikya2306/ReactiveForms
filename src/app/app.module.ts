import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomeDirective } from './Shared/custome.directive';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Mainbody/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomeDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
