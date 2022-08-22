import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Tecnico } from './../models/tecnico';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  findAll(): Observable<Tecnico[]>{
    return this.http.get<Tecnico[]>(`${API_CONFIG.baseUrl}/tecnicos`);
  }

}
