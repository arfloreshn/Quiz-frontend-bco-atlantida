import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpleadosMae } from '../model/empleados';
import { HOSTURL } from '../services/env';


const httOpciones = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmpleadosServices {

  apiUrl: String = HOSTURL + "/empleados";

  constructor(private http: HttpClient) { }

  //Consume el metodo findAll() del backend para listar todos los registros
  ListarTodo(): Observable<any> {
    return this.http.get(this.apiUrl + "/");
  }

  //Consume el metodo post del backend para crear un nuevo registro
  crearEmpleado(empleado: EmpleadosMae): Observable<any> {

    const body = JSON.stringify(empleado);
    //debugger;
    return this.http.post(this.apiUrl + "/", body, httOpciones);

  }

  //Consume el metodo put del backend para modificar un registro
  modificarEmpleado(empleado: EmpleadosMae): Observable<any> {
    const body = JSON.stringify(empleado);
    return this.http.put(this.apiUrl + "/" + empleado.empleadoID, body, httOpciones);
  }

  //Consume el metodo delete del backend para borrar un registro
  borrarEmpleado(empleado: EmpleadosMae): Observable<any> {
    return this.http.delete(this.apiUrl + "/" + empleado.empleadoID);
  }

}
