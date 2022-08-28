import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { PAGES_ROUTES } from './pages.routes';

import { FrmempleadosComponent } from './frmempleados/frmempleados.component';
import { FrmprofesionesComponent } from './frmprofesiones/frmprofesiones.component';
import { FrmpuestosComponent } from './frmpuestos/frmpuestos.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';


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
import { VonPrimengFormModule } from '@von-development-studio/primeng-form-validation';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SidebarModule } from 'primeng/sidebar';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToolbarModule } from 'primeng/toolbar';
import { FrmclimaComponent } from './frmclima/frmclima.component';
import { ImageModule } from 'primeng/image';


@NgModule({
  declarations: [
    FrmempleadosComponent,
    FrmprofesionesComponent,
    FrmpuestosComponent,
    PagesComponent,
    FrmclimaComponent
  ],
  exports: [
    FrmempleadosComponent,
    FrmprofesionesComponent,
    FrmpuestosComponent,
    PagesComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
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
    VonPrimengFormModule,
    SharedModule,
    MultiSelectModule,
    DropdownModule,
    ToolbarModule,
    ImageModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }