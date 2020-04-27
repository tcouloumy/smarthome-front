import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Device } from './models/device';


@Injectable({
	providedIn: 'root'
})
export class RestApiService {

	// Define API
	apiURL = 'http://localhost:3000';

	constructor(private http: HttpClient) { }

	/*========================================
	CRUD Methods for consuming RESTful API
	=========================================*/

	// Http Options
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	}  

	// HttpClient API get() method => Fetch employees list
	getDevices(): Observable<Device> {
		return this.http.get<Device>(this.apiURL + '/devices')
		.pipe(
			retry(1),
			catchError(this.handleError)
		)
	}


	// Error handling 
	handleError(error) {
		
		let errorMessage = '';
		
		if(error.error instanceof ErrorEvent) {
			// Get client-side error
			errorMessage = error.error.message;
		} 
		else {
			// Get server-side error
			errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}
		
		window.alert(errorMessage);
		
		return throwError(errorMessage);
	}

}