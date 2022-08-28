import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Areas } from '../model/areas';
import { HOSTURL } from '../services/env';

const httOpciones = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AreasService {

  apiUrl: String = HOSTURL + "/area";

  constructor(private http: HttpClient) { }

  //Consume el metodo findAll() del backend para listar todos los registros
  ListarTodo(): Observable<any> {
    return this.http.get(this.apiUrl + "/");
  }

  //Consume el metodo post del backend para crear un nuevo registro
  crearPuesto(obj: Areas): Observable<any> {

    const body = JSON.stringify(obj);
    return this.http.post(this.apiUrl + "/", body, httOpciones);

  }

  //Consume el metodo put del backend para modificar un registro
  modificarPuesto(obj: Areas): Observable<any> {
    const body = JSON.stringify(obj);
    return this.http.put(this.apiUrl + "/" + obj.areaId, body, httOpciones);
  }

  //Consume el metodo delete del backend para borrar un registro
  borrarProfesion(obj: Areas): Observable<any> {
    return this.http.delete(this.apiUrl + "/" + obj.areaId);
  }
}
