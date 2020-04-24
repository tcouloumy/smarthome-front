import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
	selector: 'app-test',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	brightness: number = 80;
	color: object = {
		r: 255,
		g: 255,
		b: 255
	}

	constructor(private http: HttpClient) {}

	ngOnInit() {}

	toggleSalon() {
		
		return this.http.post('http://79.83.169.199:3000/light/1/toggle', {}).subscribe((response) => {
			console.log(response);
		},
		(error) => {
			console.log(error);
		});
	}

	changeBrightness(value) {

		this.brightness = value;
		
		return this.http.post('http://79.83.169.199:3000/light/1/brightness', {
			brightness: this.brightness
		}).subscribe((response) => {
			console.log(response);
		},
		(error) => {
			console.log(error);
		});
	}

	changeColor(r, g, b) {

		this.color = {
			r: r,
			g: g,
			b: b
		}
		
		return this.http.post('http://79.83.169.199:3000/light/1/color', this.color).subscribe((response) => {
			console.log(response);
		},
		(error) => {
			console.log(error);
		});
	}

}
