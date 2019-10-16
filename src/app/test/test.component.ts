import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

	constructor(private http: HttpClient) { }

	ngOnInit() {
	}

	toggleSalon() {
		
		return this.http.post('http://localhost:3000/light/toggle', {}).subscribe((response) => {
			console.log(response);
		},
		(error) => {
			console.log(error);
		});
	}

}
