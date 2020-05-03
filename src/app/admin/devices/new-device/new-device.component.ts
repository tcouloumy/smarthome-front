import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.scss']
})
export class NewDeviceComponent implements OnInit {

	constructor(
		public activeModal: NgbActiveModal
	) {}

	ngOnInit(): void {}

}
