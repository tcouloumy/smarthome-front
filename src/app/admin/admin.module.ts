import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DevicesComponent } from './devices/devices.component';

import { adminRoutesModule } from './admin.routes';
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumbComponent } from './navbar/breadcrumb/breadcrumb.component';
import { NewDeviceComponent } from './devices/new-device/new-device.component';
import { DiscoverComponent } from './devices/discover/discover.component';

@NgModule({
	declarations: [
		AdminComponent,
		SidebarComponent,
		DevicesComponent,
		NavbarComponent,
		BreadcrumbComponent,
		NewDeviceComponent,
		DiscoverComponent
	],
	imports: [
		CommonModule,
		adminRoutesModule
	],
	exports: [],
	providers: [],
	bootstrap: []
})
export class AdminModule {}
