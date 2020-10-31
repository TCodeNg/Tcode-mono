import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { DrawerMenuComponent } from './drawer-menu/drawer-menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    DrawerMenuComponent,
    ToolbarComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    DrawerMenuComponent,
    ToolbarComponent
  ]
})
export class SharedComponentsModule{}