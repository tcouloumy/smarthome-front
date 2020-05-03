import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }    from './admin.component';
import { DevicesComponent }    from './devices/devices.component';

import { AuthGuard } from '../shared/helpers/auth.guard';

const adminRoutes: Routes = [
	{ 
		path: 'admin',
		canActivate: [AuthGuard],
		data: {
        	breadcrumb: 'Admin',
        	roles: ['Admin']
    	},
		component: AdminComponent,
		
		children: [{
			path: 'devices',
			component: DevicesComponent
		}]
	 }
];

@NgModule({
	imports: [
		RouterModule.forChild(adminRoutes)
	],
	exports: [
		RouterModule
	]
})
export class adminRoutesModule {}