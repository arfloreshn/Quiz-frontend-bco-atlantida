import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PrimengModule } from './primeng/primeng.module';
import {PanelMenuModule} from 'primeng/panelmenu';


@NgModule({
  declarations: [HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NotfoundComponent],
  exports: [HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NotfoundComponent],
    imports: [
      CommonModule,
      RouterModule,
      PrimengModule,
      PanelMenuModule
    ]
})
export class SharedModule { }
