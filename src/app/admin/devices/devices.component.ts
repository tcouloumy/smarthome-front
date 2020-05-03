import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RestApiService } from "../../shared/rest-api.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewDeviceComponent } from "./new-device/new-device.component";

@Component({
	selector: 'app-devices',
	templateUrl: './devices.component.html',
	styleUrls: ['./devices.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class DevicesComponent implements OnInit {

	Devices: any = [];

	constructor(
		public restApi: RestApiService,
		private modalService: NgbModal
	) {}

	ngOnInit(): void {
		this.loadDevices();
	}

	loadDevices() {
		this.restApi.getDevices().subscribe(data => {
			this.Devices = data;
		})
	}

	createDevice() {
		const modalRef = this.modalService.open(NewDeviceComponent);
		modalRef.componentInstance.name = 'World';
	}
}
