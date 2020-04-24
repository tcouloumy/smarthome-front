import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [
		'../assets/css/bootstrap.min.css',
		'../assets/scss/paper-dashboard.scss',
		'./app.component.scss'
	],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent {
	title = 'mon-projet-angular';
}
