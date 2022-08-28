import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httOpciones = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  apiUrl: String = "https://run.mocky.io/v3/e588b8d6-ffa9-4b15-a927-46a7ac128eac";

  constructor(private http: HttpClient) { }


  //Consume el metodo findAll() del backend para listar todos los registros
  ListarTodo(): Observable<any> {
    return this.http.get(this.apiUrl + "/");
  }


}
