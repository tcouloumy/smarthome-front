import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RestApiService } from "../../shared/rest-api.service";

@Component({
	selector: 'app-devices',
	templateUrl: './devices.component.html',
	styleUrls: ['./devices.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class DevicesComponent implements OnInit {

	Devices: any = [];

	constructor(
		public restApi: RestApiService
	) {}

	ngOnInit(): void {
		this.loadDevices();
	}

	loadDevices() {
		this.restApi.getDevices().subscribe(data => {
			this.Devices = data;
		})
	}
}
