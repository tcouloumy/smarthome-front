import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DiscoverComponent } from "../discover/discover.component";

@Component({
	selector: 'app-new-device',
	templateUrl: './new-device.component.html',
	styleUrls: ['./new-device.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class NewDeviceComponent implements OnInit {

	constructor(
		public activeModal: NgbActiveModal,
		private modalService: NgbModal
	) {}

	ngOnInit(): void {}

	discover() {
		this.activeModal.close();
		const modalRef = this.modalService.open(DiscoverComponent);
	}
}
