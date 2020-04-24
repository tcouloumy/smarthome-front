import { NgModule } from '@angular/core';

import { SidebarComponent } from './sidebar/sidebar.component';

import { adminRoutesModule } from './admin.routes';

@NgModule({
	declarations: [
		SidebarComponent
	],
	imports: [
		adminRoutesModule
	],
	exports: [],
	providers: []
})
export class AdminModule {}
