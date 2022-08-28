import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Climas } from 'src/app/model/climas';


@Component({
  selector: 'app-frmclima',
  templateUrl: './frmclima.component.html',
  styles: [
  ]
})
export class FrmclimaComponent implements OnInit {

  climas: Climas[] = [];

  formCrear: FormGroup;


  constructor(private climaService: ClimaService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {


    //this.region.
    this.ListarTodo();
    //console.log(this.climas);
  }


  //Exponemos el control de validaciones para el formulario editar
  get createField(): { [key: string]: AbstractControl } {
    return this.formCrear.controls;
  }
  //Exponer o publicar los campos de control en el formulario de crear
  get region() { return this.formCrear.get('region'); }



  // METODO PARA LISTAR TODOS LOS REGISTRO OBTENIDOS DEL SERVICIO
  ListarTodo() {

    //    let r = this.climaService.obtenerDatosUbicacion();
    //    debugger;

    // Consumimos el servicio que muestra todos los registro 

    this.climaService.ListarTodo().subscribe(
      (result: any) => {
        //Let var_paises es una variable de tipo local que solo funciona dentro la funcion ListarEmpleados() 
        let obj: any[] = [];
        for (let i = 0; i < 1; i++) {

          let var_cadena_json = JSON.stringify(result);
          let puntero = result as Climas;
          console.log(var_cadena_json);
          debugger;
          obj.push(puntero);
          console.log(puntero);
          debugger;

        }


        debugger;
        this.climas = obj;

      },

      //muestro el error en la consola de nuestro navegador en caso de que ocurra alguna error
      error => {
        this.messageService.add({ severity: 'warn', summary: 'Fallo de petición!', detail: 'Petición denegada Mock URL' });
      }
    )
  }



}
