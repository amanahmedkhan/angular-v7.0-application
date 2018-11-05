import { Component, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss']
})

export class ModalComponent {

	@Input() title = `Information`;

	constructor(public activeModal: NgbActiveModal) {}
}