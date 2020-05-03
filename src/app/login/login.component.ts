import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../shared/services/auth.service'

@Component({ 
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.scss'],
	encapsulation: ViewEncapsulation.None 
})
export class LoginComponent implements OnInit {
	
	loginForm: FormGroup;
	submitted = false;

	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService
	) {}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	get fields() { return this.loginForm.controls; }

	onSubmit() {
		this.submitted = true;

		if (this.loginForm.invalid) {
			return;
		}

		this.authService.login(this.fields.username.value, this.fields.password.value).subscribe(data => {
			// TODO
			// this.router.navigate([this.returnUrl]);
		},
		error => {
			// TODO
			console.log(error);
		});
	}
}