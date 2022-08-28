import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { PuestosService} from 'src/app/services/puestos.service';
import { Puestos} from 'src/app/model/puestos';
 
@Component({
  selector: 'app-pages',
  templateUrl: './page.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
