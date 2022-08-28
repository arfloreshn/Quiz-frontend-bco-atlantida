import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Puestos } from '../model/puestos';
import { HOSTURL } from '../services/env';

const httOpciones = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class PuestosService {

  //apiUrl:String = "http://localhost:8080/atlantida/api/puestos";
  apiUrl: String = HOSTURL + "/puestos";

  constructor(private http: HttpClient) { }

  //Consume el metodo findAll() del backend para listar todos los registros
  ListarTodo(): Observable<any> {
    return this.http.get(this.apiUrl + "/");
  }

  //Consume el metodo post del backend para crear un nuevo registro
  crearPuesto(objPuestos: Puestos): Observable<any> {

    const body = JSON.stringify(objPuestos);
    return this.http.post(this.apiUrl + "/", body, httOpciones);

  }

  //Consume el metodo put del backend para modificar un registro
  modificarPuesto(objPuestos: Puestos): Observable<any> {
    const body = JSON.stringify(objPuestos);
    return this.http.put(this.apiUrl + "/" + objPuestos.puestoId, body, httOpciones);
  }

  //Consume el metodo delete del backend para borrar un registro
  borrarProfesion(objPuestos: Puestos): Observable<any> {
    return this.http.delete(this.apiUrl + "/" + objPuestos.puestoId);
  }
}
