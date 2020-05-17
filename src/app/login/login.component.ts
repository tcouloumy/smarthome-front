import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../shared/services/auth.service'

@Component({ 
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.scss'],
	encapsulation: ViewEncapsulation.None 
})
export class LoginComponent implements OnInit {
	
	loginForm: FormGroup;
	submitted = false;
	returnUrl: string;

	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private route: ActivatedRoute,
		private router: Router
	) {
        if (this.authService.currentUserValue) { 
            this.router.navigate(['/']);
        }
	}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});

		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}

	get fields() { return this.loginForm.controls; }

	onSubmit() {
		this.submitted = true;

		if (this.loginForm.invalid) {
			return;
		}

		this.authService.login(this.fields.username.value, this.fields.password.value).subscribe(data => {
			if (this.returnUrl) {
				this.router.navigate([this.returnUrl])
			}
			else {
				this.router.navigate(['']);
			}
		},
		error => {
			// TODO
			console.log(error);
		});
	}
}