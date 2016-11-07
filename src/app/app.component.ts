import { Component }         from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import '../../public/css/styles.css';

@Component( {
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ],
	encapsulation: ViewEncapsulation.Native
} )

export class AppComponent { }
