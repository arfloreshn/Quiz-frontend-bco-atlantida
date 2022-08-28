import { Component, OnInit } from '@angular/core';
import { ProfesionesService } from 'src/app/services/profesiones.service';
import { Profesiones } from 'src/app/model/profesiones';

import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';


@Component({
  selector: 'app-frmprofesiones',
  templateUrl: './frmprofesiones.component.html',
  styles: [
  ]
})
export class FrmprofesionesComponent implements OnInit {


  frmmain: FormGroup;

  submitted = false;

  get f(): { [key: string]: AbstractControl } {
    return this.frmmain.controls;
  }


  /*-*-*-*-*-*-*-*-*-*-*-*- VARIABLES DE DIALOGOS *-*-*-*-*-**-*-*-*-*-*-*-*-*-
           VARIABLES PARA CUADROS DE DIALOGO
  *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/


  frmCrear: boolean = false;
  frmEditar: boolean = false;
  frmBorrar: boolean = false;

  /*-*-*-*-*-*-*-*-*-*-*-*- VARIABLES PARA ARREGLOS *-*-*-*-*-**-*-*-*-*-*-*-*-*-
             EN ESTA SECCION SE DECLARAN TODOS LOS ARREGLOS QUE VAMOS A CONSUMIR
    *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/


  profesiones: Profesiones[] = [];

  //Arreglo para definir las columna de la tabla en el front-end o COMPONENTE HTML 
  cols: any[] = [];

  /*
  Tipo: entidad.
  Esta variable tipo entidad, abstrae o copia las propiedades de la clase modelo 
  de profesiones, este tipo se usara para crear nuevos registros 
  */

  entidad: Profesiones =
    {
      profesionId: null,
      descripcion: ""
    }


  /*
   Tipo: seleccionarFilad.
   Esta es una variable de abstraccion de las propiedades de la clase modelo de Profesiones
   este tipo se usara para llenar y mostrar el detalle de los registros una vez seleccionados 
   */

  seleccionarFila: Profesiones =
    {
      profesionId: null,
      descripcion: ""
    }




  constructor(private profesionesService: ProfesionesService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig,
    private formbuilder: FormBuilder) { }



  get descripcion() { return this.frmmain.get('descripcion'); }


  validarFormulario() {

    this.frmmain = this.formbuilder.group({
      'profesionId': new FormControl(''),
      'descripcion': new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

  }


  oprimirBoton(obj: Profesiones, cmd: String) {

    this.seleccionarFila = obj;

    this.frmmain.setValue(this.seleccionarFila);

    if (cmd == 'U') {
      this.frmEditar = true;
    }
    else {
      if (cmd == 'D') {
        this.frmBorrar = true;
      }

    }
  }


  // llamada para mostrar el dialogo de Crear nuevo Registro
  viewNuevoRegistro() {
    this.frmCrear = true;
  }

  //llamada para mostrar el dialogo de Modificar el Registro
  viewEditaRegistro() {
    // Validamos de que se haya seleccionado un registro al menos
    if (this.seleccionarFila != null && this.seleccionarFila.descripcion.length > 5) {
      this.frmEditar = true;
    }
    else {
      this.messageService.add({ severity: 'warn', summary: 'Selecion', detail: 'Seleccione un registro' });
      return
    }

  }

  //llamada para mostrar el dialogo de Borrar el Registro
  viewBorraRegistro() {

    if (this.seleccionarFila != null && this.seleccionarFila.descripcion.length > 5) {
      this.frmBorrar = true;
    }
    else {
      this.messageService.add({ severity: 'warn', summary: 'Selecion', detail: 'Seleccione un registro' });
      return
    }

  }



  isFieldValid(field: string) {
    return !this.frmmain.get(field).valid && this.frmmain.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }



  ngOnInit(): void {

    this.primengConfig.ripple = true;

    //Los campos del arreglo para las columnas, se deben llamar exactamente igual nombre del modelo de la clase pais
    this.cols = [
      { field: "profesionId", header: "ID" }
      , { field: "descripcion", header: "DESCRIPCION" }

    ];
    //CARGO LOS DATOS EL ENPOINT
    this.ListarTodo();

    //HAY QUE VALIDAR SIEMPRE EL FORMULARIO
    this.validarFormulario();

  }

  // METODO PARA LISTAR TODOS LOS REGISTRO OBTENIDOS DEL SERVICIO
  ListarTodo() {

    // Consumimos el servicio que muestra todos los registro 
    this.profesionesService.ListarTodo().subscribe(
      (result: any) => {
        this.profesiones = result;
      },
      //muestro el error en la consola de nuestro navegador en caso de que ocurra alguna error
      error => {
        this.messageService.add({ severity: 'warn', summary: 'Fallo de petición!', detail: 'Petición denegada' });
      }
    )
  }



  /* -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
      ESTE PROCEDIMIENTO ES PARA CREAR UN NUEVO REGISTRO 
  -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

  cmdcrearnuevoregistro(value: string) {

    // console.log(value);
    this.submitted = true;

    if (this.frmmain.invalid) {
      this.messageService.add({ severity: 'warn', summary: 'Favor completar la informacion!', detail: 'Acción cancelada' });
      return;
    }

    this.entidad.profesionId = null;
    //Consumimos el servicio para crear nuevos registros 
    this.profesionesService.crearProfesion(this.entidad).subscribe(
      (result: any) => {
        //console.log(result);
        let objProfesiones = result as Profesiones;
        let mensaje = 'Registro creado, No.: ' + objProfesiones.profesionId.toString();
        // this.profesiones.push(objProfesiones);
        this.ListarTodo();
        //
        this.messageService.add({ severity: 'success', summary: 'Procesado', detail: mensaje });
        this.frmCrear = false;
      },
      //muestro el error en la consola de nuestro navegador en caso de que ocurra alguna error
      error => {
        //console.log(error); 
        this.messageService.add({ severity: 'warn', summary: 'Fallo de solicitud!', detail: 'Acción cancelada' + error });
      }
    )

    this.submitted = false;
    this.frmmain.reset();

  }


  /* -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
       ESTE PROCEDIMIENTO ES PARA MODIFICAR UN REGISTRO 
   -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

  cmdmodificarregistro() {

    this.frmmain.valid;
    //Consumimos el servicio para modificar registros
    this.profesionesService.modificarProfesion(this.seleccionarFila).subscribe(
      (result: any) => {
        //console.log(result);
        //let objProfesiones = result as Profesiones;
        let objProfesiones = result;

        //this.profesiones.push(objProfesiones);
        this.ListarTodo();
        this.messageService.add({ severity: 'success', summary: 'Editado', detail: 'Edición existosa!' });
        this.frmEditar = false;
        this.submitted = false;
        this.frmmain.reset();
      },
      //muestrar el error en la consola de nuestro navegador en caso de que ocurra alguna error
      error => {
        //console.log(error); 
        this.messageService.add({ severity: 'warn', summary: 'Fallo de solicitud!', detail: 'Acción cancelada' });
      }
    )

  }


  /* -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
       ESTE PROCEDIMIENTO ES PARA BORRAR UN REGISTRO 
   -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

  cmdborraregistro() {



    // Validamos de que se haya seleccionado un registro al menos
    if (this.seleccionarFila == null && this.seleccionarFila.profesionId == null) {
      this.messageService.add({ severity: 'warn', summary: 'Selecion', detail: 'Seleccione un registro' });
      return
    }


    // Hacemos la pregunta de confirmación del borrar
    this.confirmationService.confirm({
      message: 'Esta seguro que desea proceder ' + this.seleccionarFila.profesionId + "?",
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        let status = "";
        // Comsumimos el servicio de borrar registros, depues habeer confirmado la eliminacion del registro
        this.profesionesService.borrarProfesion(this.seleccionarFila).subscribe(
          {
            next: data => {
              status = 'Delete successful';
              this.frmBorrar = false;
              this.ListarTodo();
            },
            error: error => {
              let errorMessage = error.message;
              console.error('There was an error!', error);
              this.frmBorrar = false;
              this.ListarTodo();
            }
          });


      },
      reject: () => {
        this.messageService.add({ severity: 'info', summary: 'Cancelado', detail: 'Acción cancelada' });
      }
    });

  }

  //FIN DE LA CLASE
}
