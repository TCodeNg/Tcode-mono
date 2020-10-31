import { NgModule } from "@angular/core";
import { DrawerMenuComponent } from './drawer-menu/drawer-menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    DrawerMenuComponent,
    ToolbarComponent
  ],
  imports: [],
  exports: [
    DrawerMenuComponent,
    ToolbarComponent
  ]
})
export class SharedComponentsModule{}