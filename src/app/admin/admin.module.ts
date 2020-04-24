import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { adminRoutesModule } from './admin.routes';

@NgModule({
	declarations: [
		AdminComponent,
		SidebarComponent
	],
	imports: [
		adminRoutesModule
	],
	exports: [],
	providers: [],
	bootstrap: [

	]
})
export class AdminModule {}
