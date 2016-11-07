import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { NavComponent }  from './nav/nav.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule
	],

	declarations: [
		AppComponent,
		NavComponent,
		HomeComponent
	],

	bootstrap: [ AppComponent ]
})

export class AppModule { }
