import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewDeviceComponent } from "./new-device/new-device.component";
import { DeviceApi } from "../../shared/api/device.api";

@Component({
	selector: 'app-devices',
	templateUrl: './devices.component.html',
	styleUrls: ['./devices.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class DevicesComponent implements OnInit {

	Devices: any = [];

	constructor(
		public deviceApi: DeviceApi,
		private modalService: NgbModal
	) {}

	ngOnInit(): void {
		this.loadDevices();
	}

	loadDevices() {
		this.deviceApi.getAll().subscribe(data => {
			this.Devices = data;
		})
	}

	createDevice() {
		const modalRef = this.modalService.open(NewDeviceComponent);
		modalRef.componentInstance.name = 'World';
	}
}
