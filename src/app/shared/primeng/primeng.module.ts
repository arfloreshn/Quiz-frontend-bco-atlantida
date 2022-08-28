import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import {SidebarModule} from 'primeng/sidebar';


import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';


import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService} from 'primeng/api';
import { VonPrimengFormModule } from '@von-development-studio/primeng-form-validation';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    InputNumberModule,
    SidebarModule,
    MenubarModule,
    MessageModule,
    MessagesModule,
    PanelModule,
    RadioButtonModule,
    SplitButtonModule,
    TableModule,
    ToastModule,
    VonPrimengFormModule
  ],
  providers: [MessageService,DatePipe,ConfirmationService]
})
export class PrimengModule { }
