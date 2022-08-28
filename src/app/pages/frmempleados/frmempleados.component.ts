import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';


// Importa los componentes o controles de primeNG
import { ConfirmationService, SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { EmpleadosServices } from 'src/app/services/empleados.service';
import { ProfesionesService } from 'src/app/services/profesiones.service';
import { PuestosService } from 'src/app/services/puestos.service';
import { EmpleadosMae } from 'src/app/model/empleados';
import { AreasService } from 'src/app/services/areas.service';


interface CatEstados {
  descripcion: string,
  estadoId: number
}

@Component({
  selector: 'app-frmempleados',
  templateUrl: './frmempleados.component.html',
  styles: [
  ]
})
export class FrmempleadosComponent implements OnInit {


  formCrear: FormGroup;

  formEditar: FormGroup;

  formBorrar: FormGroup;

  submitted = false;


  itemEstados: CatEstados[];
  seleccionarEstado: string;

  catEstados: {
    descripcion: string,
    estadoId: number
  }

  itemsAreas: SelectItem[];
  seleccionarArea: string;

  catArea: {
    descripcion: string,
    areaId: number
  }


  itemsPuestos: SelectItem[];
  seleccionarPuesto: string;

  catPuestos: {
    descripcion: string,
    puestoId: number
  }


  itemsProfesiones: SelectItem[];
  seleccionarProfesion: string;

  catProfesion: {
    descripcion: string,
    profesionId: number
  }


  /*-*-*-*-*-*-*-*-*-*-*-*- VARIABLES DE DIALOGOS *-*-*-*-*-**-*-*-*-*-*-*-*-*-
            EN ESTA SECCION SE DECLARAN TODOS LOS ARREGLOS QUE VAMOS A CONSUMIR
   *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

  frmCrear: boolean = false;
  frmEditar: boolean = false;
  frmBorrar: boolean = false;

  ////////////////////////// VARIABLES DE ARRREGLOS ///////////////////////////////////
  //         EN ESTA SECCION SE DECLARAN TODOS LOS ARREGLOS QUE VAMOS A CONSUMIR
  ////////////////////////////////////////////////////////////////////////////////////

  // Arreglo de fecha para inicializar las fechas del calendario en espaniol*/
  es: any;

  // Arreglo de paises para trabajar con el llenado de datos de tabla del front-end o COMPONENTE HTML 
  empleados: EmpleadosMae[] = [];

  //Arreglo para definir las columna de la tabla en el front-end o COMPONENTE HTML 
  cols: any[] = [];

  ///////////////////////////// VARIABLES DE TIPOS  ///////////////////////////////////

  /*
  Tipo: entidad.
  Esta variable tipo entidad, abstrae o copia las propiedades de la clase modelo 
  de empleados, este tipo se usara para crear nuevos registros 
  */

  entidad: EmpleadosMae =
    {
      empleadoID: null,
      dni: "",
      nombres: "",
      primerApellido: "",
      segundoApellido: "",
      impSalario: 0.00,
      fecIngreso: new Date(Date.now()),
      codempleado: null,
      catArea: {
        descripcion: "",
        areaId: null,
      },
      catProfesion: {
        descripcion: "",
        profesionId: null

      },
      catPuestos: {
        descripcion: "",
        puestoId: null
      },
      catEstados: {
        descripcion: "",
        estadoId: null
      }
    }

  /*
   Tipo: seleccionarEmpleado.
   Esta es una variable de abstraccion de las propiedades de la clase modelo de Empleados
   este tipo se usara para llenar y mostrar el detalle de los registros una vez seleccionados 
   */

  seleccionarFila: EmpleadosMae =
    {
      empleadoID: 0,
      dni: "",
      nombres: "",
      primerApellido: "",
      segundoApellido: "",
      impSalario: 0.00,
      fecIngreso: new Date(Date.now()),
      codempleado: "",
      catArea: {
        descripcion: "",
        areaId: 0,
      },
      catProfesion: {
        descripcion: "",
        profesionId: 0
      },
      catPuestos: {
        descripcion: "",
        puestoId: 0
      },
      catEstados: {
        descripcion: "",
        estadoId: 0
      }
    }


  constructor(private empleadosService: EmpleadosServices,
    private profesionesService: ProfesionesService,
    private puestosService: PuestosService,
    private areasService: AreasService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private formbuilder: FormBuilder) {

    this.itemEstados = [
      { descripcion: 'ALTA', estadoId: 1 },
      { descripcion: 'BAJA', estadoId: 2 }
    ];

  }


  onCboPuestoChange(event) {
    var descripcion = event.value.descripcion;
    var puestoId = event.value.puestoId;
    this.catPuestos = { descripcion, puestoId };
  }


  onCboAreaChange(event) {
    var descripcion = event.value.descripcion;
    var areaId = event.value.areaId;
    this.catArea = { descripcion, areaId };
  }


  onCboProfesionChange(event) {
    var descripcion = event.value.descripcion;
    var profesionId = event.value.profesionId;
    this.catProfesion = { descripcion, profesionId };
  }


  onCboEstadoChange(event) {
    var descripcion = event.value.descripcion;
    var estadoId = event.value.estadoId;
    this.catEstados = { descripcion, estadoId };
  }


  instanciarFormularios() {

    //Declaramos los campos que van a ser consumidos en el formulario de crear

    this.formCrear = new FormGroup({
      nombres: new FormControl([null, Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      apellido1: new FormControl([null, Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      apellido2: new FormControl([null, Validators.maxLength(30)]),
      dni: new FormControl([null, [Validators.required, Validators.minLength(11), Validators.maxLength(13)]]),
      impSalario: new FormControl([null, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern('/^[0-9]\d{3,10}$/')
      ])]),
      fechaIngreso: new FormControl(),
    });

    //Declaramos los campos que van a ser consumidos en el formulario de actualizar o editar
    this.formEditar = new FormGroup({
      enombres: new FormControl([null, Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      eapellido1: new FormControl([null, Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      eapellido2: new FormControl([null, Validators.maxLength(30)]),
      edni: new FormControl([null, [Validators.required, Validators.minLength(11), Validators.maxLength(13)]]),
      efechaIngreso: new FormControl(),
      eimpSalario: new FormControl(),
      selectedArea: new FormControl(),
      selectedPuesto: new FormControl(),
      selectedProfesion: new FormControl(),
      selectedEstado: new FormControl(),
    });

    //Declaramos los campos que van a ser consumidos en el formulario de borrar
    this.formBorrar = new FormGroup({
      dnombres: new FormControl(),
      dapellido1: new FormControl(),
      dapellido2: new FormControl(),
      ddni: new FormControl(),
      dfechaIngreso: new FormControl(),
    });


  }

  //Exponemos el control de validaciones para el formulario editar
  get createField(): { [key: string]: AbstractControl } {
    return this.formCrear.controls;
  }

  //Exponemos el control de validaciones para el formulario editar
  get editField(): { [key: string]: AbstractControl } {
    return this.formEditar.controls;
  }

  //Exponer o publicar los campos de control en el formulario de crear
  get nombres() { return this.formCrear.get('nombres'); }
  get apellido1() { return this.formCrear.get('apellido1'); }
  get apellido2() { return this.formCrear.get('apellido2'); }
  get dni() { return this.formCrear.get('dni'); }

  //Exponer o publicar los campos de control en el formulario de editar
  get enombres() { return this.formEditar.get('enombres'); }
  get eapellido1() { return this.formEditar.get('eapellido1'); }
  get eapellido2() { return this.formEditar.get('eapellido2'); }
  get edni() { return this.formEditar.get('edni'); }
  get selectedPuesto() { return this.formEditar.get('selectedPuesto'); }
  get selectedProfesion() { return this.formEditar.get('selectedProfesion'); }
  get selectedArea() { return this.formEditar.get('selectedArea'); }
  get selectedEstado() { return this.formEditar.get('selectedEstado'); }


  oprimirBoton(obj: EmpleadosMae, cmd: String) {

    this.seleccionarFila = obj;



    if (cmd == 'U') {
      this.frmEditar = true;


      this.instanciarCombosEdicion();
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
    if (this.seleccionarFila != null && this.seleccionarFila.nombres.length > 5) {
      this.frmEditar = true;
    }
    else {
      this.messageService.add({ severity: 'warn', summary: 'Selecion', detail: 'Seleccione un registro' });
      return
    }

  }

  //llamada para mostrar el dialogo de Borrar el Registro
  viewBorraRegistro() {

    if (this.seleccionarFila != null && this.seleccionarFila.nombres.length > 5) {
      this.frmBorrar = true;
    }
    else {
      this.messageService.add({ severity: 'warn', summary: 'Selecion', detail: 'Seleccione un registro' });
      return
    }

  }



  isFieldValid(field: string) {
    return !this.formCrear.get(field).valid && this.formCrear.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  /////////////////////////   INCIALIZACION O PRE-RENDERIZADO DE VARIABLES  ///////////////////////////////////


  ngOnInit(): void {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar'
    };

    //Los campos del arreglo para las columnas, se deben llamar exactamente igual nombre del modelo de la clase pais
    this.cols = [
      { field: "empleadoID", header: "ID" }
      , { field: "dni", header: "DNI" }
      , { field: "nombres", header: "NOMBRES" }
      , { field: "primerApellido", header: "1ER APELLIDO" }
      , { field: "segundoApellido", header: "2DO APELLIDO" }
      , { field: "fecIngreso", header: "FEC. INGRESO" }
      , { field: "estado", header: "ESTADO" }
    ];

    //Listar puestos desde el Endpoint

    this.cargarcboPuestos();

    //Listar profesiones desde el Endpoint
    this.cargarcboProfesiones();

    //Listar areas desde el Endpoint
    this.cargarcboAreas();

    //Listat todos los empleados desde el Endpoint
    this.ListarEmpleados();

    //Vamos a instanciar los formularios y campos que van consumir los formularios
    this.instanciarFormularios();


  }



  instanciarCombosEdicion() {


    let objectPuesto = this.itemsPuestos.find(c => c.value.puestoId === this.seleccionarFila.catPuestos.puestoId);
    let objectProfesion = this.itemsProfesiones.find(c => c.value.profesionId === this.seleccionarFila.catProfesion.profesionId);
    let objectArea = this.itemsAreas.find(c => c.value.areaId === this.seleccionarFila.catArea.areaId);
    let objectEstado = this.itemEstados.find(c => c.estadoId === this.seleccionarFila.catEstados.estadoId);

    this.formEditar.get("selectedPuesto").setValue(objectPuesto);
    this.formEditar.get("selectedProfesion").setValue(objectProfesion);
    this.formEditar.get("selectedArea").setValue(objectArea);
    this.formEditar.get("selectedEstado").setValue(objectEstado);

    /*
    if (this.seleccionarFila != null) {
      this.catArea.areaId = this.seleccionarFila.catArea.areaId;
      this.catArea.descripcion = this.seleccionarFila.catArea.descripcion;
      this.catEstados.descripcion = this.seleccionarFila.catEstados.descripcion;
      this.catEstados.estadoId = this.seleccionarFila.catEstados.estadoId;
      this.catProfesion.profesionId = this.seleccionarFila.catProfesion.profesionId;
      this.catProfesion.descripcion = this.seleccionarFila.catProfesion.descripcion;
      this.catPuestos.puestoId = this.seleccionarFila.catPuestos.puestoId;
      this.catPuestos.descripcion = this.seleccionarFila.catPuestos.descripcion;
    }
*/
  }


  // METODO PARA LISTAR TODOS LOS PUESTOS
  cargarcboPuestos() {

    // Consumimos el servicio que muestra todos los registros del catalogo de puestos 
    if (this.seleccionarFila.catPuestos.puestoId != 0) {
      this.seleccionarPuesto = this.seleccionarFila.catPuestos.puestoId.toString();
    }

    this.itemsPuestos = [];
    this.puestosService.ListarTodo().subscribe(
      (result: any) => {
        this.itemsPuestos.push({ label: 'Seleccione un puesto', value: 0 });
        for (let i = 0; i < result.length; i++) {
          this.itemsPuestos.push({ label: result[i].descripcion, value: { puestoId: result[i].puestoId, descripcion: result[i].descripcion } });
        }
      },

      //muestro el error en la consola de nuestro navegador en caso de que ocurra alguna error
      error => {
        this.messageService.add({ severity: 'warn', summary: 'Fallo de petición!', detail: 'Petición denegada Puestos' });
      }
    )
  }

  // METODO PARA LISTAR TODOS LOS PUESTOS
  cargarcboAreas() {

    // Consumimos el servicio que muestra todos los registros del catalogo de puestos 
    this.areasService.ListarTodo().subscribe(
      (result: any) => {
        this.itemsAreas = [];
        this.itemsAreas.push({ label: 'Seleccione un area', value: 0 });
        for (let i = 0; i < result.length; i++) {
          this.itemsAreas.push({ label: result[i].descripcion, value: { areaId: result[i].areaId, descripcion: result[i].descripcion } });
        }
      },
      //muestro el error en la consola de nuestro navegador en caso de que ocurra alguna error
      error => {
        this.messageService.add({ severity: 'warn', summary: 'Fallo de petición!', detail: 'Petición denegada Areas' });
      }
    )
  }


  // METODO PARA LISTAR TODAS LAS PROFESIONES
  cargarcboProfesiones() {

    // Consumimos el servicio que muestra todos los registros del catalogo de puestos 
    this.profesionesService.ListarTodo().subscribe(
      (result: any) => {
        this.itemsProfesiones = [];
        this.itemsProfesiones.push({ label: 'Seleccione una profesion', value: 0 });
        for (let i = 0; i < result.length; i++) {
          this.itemsProfesiones.push({ label: result[i].descripcion, value: { profesionId: result[i].profesionId, descripcion: result[i].descripcion } });
        }
      },
      //muestro el error en la consola de nuestro navegador en caso de que ocurra alguna error
      error => {
        this.messageService.add({ severity: 'warn', summary: 'Fallo de petición!', detail: 'Petición denegada Profesiones' });
      }
    )
  }


  // METODO PARA LISTAR TODOS LOS REGISTRO OBTENIDOS DEL SERVICIO
  ListarEmpleados() {

    // Consumimos el servicio que muestra todos los registro 
    this.empleadosService.ListarTodo().subscribe(
      (result: any) => {

        //Let var_paises es una variable de tipo local que solo funciona dentro la funcion ListarEmpleados() 
        let objEmpleados: EmpleadosMae[] = [];
        for (let i = 0; i < result.length; i++) {

          //Covertimos a una cadena de texto
          let var_cadena_json = JSON.stringify(result[i]);

          let posIni = var_cadena_json.indexOf("fecIngreso");
          let posFinal = (posIni + 13) + 10;
          let tempFecha = var_cadena_json.substring(posIni + 13, posFinal);


          let var_yy = parseInt(tempFecha.substr(0, 4), 10);
          let var_mm = parseInt(tempFecha.substr(5, 2), 10);
          let var_dd = parseInt(tempFecha.substr(8, 2), 10);

          let puntero = result[i] as EmpleadosMae


          //Reasigno el nuevo valor de la fecha
          //Esto est correcto porque asi no tiene definido 
          puntero.fecIngreso = new Date(var_yy, var_mm - 1, var_dd); //Svar_nueva_fecha;

          objEmpleados.push(puntero);
          //          console.log(objEmpleados);
          //        debugger;

        }


        this.empleados = objEmpleados;

      },
      //muestro el error en la consola de nuestro navegador en caso de que ocurra alguna error
      error => {
        this.messageService.add({ severity: 'warn', summary: 'Fallo de petición!', detail: 'Petición denegada Empleados' });
      }
    )
  }



  /* -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
      ESTE PROCEDIMIENTO ES PARA CREAR UN NUEVO REGISTRO 
  -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

  cmdcrearnuevoregistro() {

    this.submitted = true;

    if (this.formCrear.invalid) {
      this.messageService.add({ severity: 'warn', summary: 'Favor completar la informacion!', detail: 'Acción cancelada' });
      return;
    }

    this.entidad.codempleado = "0003";
    this.entidad.catArea.areaId = this.catArea.areaId;
    this.entidad.catArea.descripcion = this.catArea.descripcion;
    this.entidad.catEstados.descripcion = this.catEstados.descripcion;
    this.entidad.catEstados.estadoId = this.catEstados.estadoId;
    this.entidad.catProfesion.profesionId = this.catProfesion.profesionId;
    this.entidad.catProfesion.descripcion = this.catProfesion.descripcion;
    this.entidad.catPuestos.puestoId = this.catPuestos.puestoId;
    this.entidad.catPuestos.descripcion = this.catPuestos.descripcion;


    //Consumimos el servicio para crear nuevos registros 
    this.empleadosService.crearEmpleado(this.entidad).subscribe(
      (result: any) => {
        //console.log(result);
        //  let objEmpleado = result as EmpleadosMae;
        let mensaje = 'Registro creado, No.: ' + result.empleadoID.toString();
        //this.empleados.push(objEmpleado);
        this.ListarEmpleados();
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
    this.formCrear.reset();

  }


  /*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
            ESTE PROCEDIMIENTO ES PARA MODIFICAR UN REGISTRO 
   *-*-*-**-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

  cmdmodificarregistro() {


    this.seleccionarFila.catArea.descripcion = this.selectedArea.value.label;
    this.seleccionarFila.catArea.areaId = this.selectedArea.value.value.areaId;

    this.seleccionarFila.catProfesion.descripcion = this.selectedProfesion.value.label;
    this.seleccionarFila.catProfesion.profesionId = this.selectedProfesion.value.value.profesionId;

    this.seleccionarFila.catPuestos.descripcion = this.selectedPuesto.value.label;
    this.seleccionarFila.catPuestos.puestoId = this.selectedPuesto.value.value.puestoId;

    this.seleccionarFila.catEstados.descripcion = this.selectedEstado.value.descripcion;
    this.seleccionarFila.catEstados.estadoId = this.selectedEstado.value.estadoId;

    //Consumimos el servicio para modificar registros
    this.empleadosService.modificarEmpleado(this.seleccionarFila).subscribe(
      (result: any) => {
        //console.log(result);
        //let objEmpleado = result as EmpleadosMae;

        //this.empleados.push(objEmpleado);
        this.ListarEmpleados();
        this.messageService.add({ severity: 'success', summary: 'Editado', detail: 'Edición existosa!' });
        this.frmEditar = false;
        this.submitted = false;
        this.formEditar.reset();
      },
      //muestrar el error en la consola de nuestro navegador en caso de que ocurra alguna error
      error => {
        //console.log(error); 
        this.messageService.add({ severity: 'warn', summary: 'Fallo de solicitud!', detail: 'Acción cancelada' });
      }
    )

  }


  /*-*-*-*-**-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
                   ESTE PROCEDIMIENTO ES PARA BORRAR UN REGISTRO 
   *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

  cmdborraregistro() {

    // Validamos de que se haya seleccionado un registro al menos
    if (this.seleccionarFila == null && this.seleccionarFila.empleadoID == null) {
      this.messageService.add({ severity: 'warn', summary: 'Selecion', detail: 'Seleccione un registro' });
      return
    }

    // Hacemos la pregunta de confirmación del borrar
    this.confirmationService.confirm({
      message: 'Esta seguro que desea proceder?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        let status = "";
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Acción confirmada' });

        // Comsumimos el servicio de borrar registros, depues habeer confirmado la eliminacion del registro
        this.empleadosService.borrarEmpleado(this.seleccionarFila).subscribe(
          {
            next: data => {
              status = 'Delete successful';

            },
            error: error => {
              let errorMessage = error.message;
              console.error('There was an error!', error);
              this.frmBorrar = false;
              this.ListarEmpleados();
            }
          });

      },
      reject: () => {
        this.messageService.add({ severity: 'info', summary: 'Cancelado', detail: 'Acción cancelada' });
      }
    });
  }


}