import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesiones } from '../model/profesiones';
import { HOSTURL } from '../services/env';

const httOpciones = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProfesionesService {



  apiUrl: String = HOSTURL + "/profesiones";

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  //Consume el metodo findAll() del backend para listar todos los registros
  ListarTodo() {
    return this.http.get(this.apiUrl + "/");
  }

  //Consume el metodo post del backend para crear un nuevo registro
  crearProfesion(obj: Profesiones): Observable<any> {

    const body = JSON.stringify(obj);
    return this.http.post(this.apiUrl + "/", body, httOpciones);

  }

  //Consume el metodo put del backend para modificar un registro
  modificarProfesion(objProfesiones: Profesiones): Observable<any> {

    const body = JSON.stringify(objProfesiones);
    return this.http.put(this.apiUrl + "/" + objProfesiones.profesionId, body, httOpciones);
  }

  //Consume el metodo delete del backend para borrar un registro
  borrarProfesion(objProfesion: Profesiones): Observable<any> {

    return this.http.delete(this.apiUrl + "/" + objProfesion.profesionId, httOpciones);
  }

}
