import { API_CONFIG } from './../config/api.config';
import { Cliente } from 'src/app/models/cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  findAll(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${API_CONFIG.baseUrl}/tecnicos`);
  }

  findById(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${API_CONFIG.baseUrl}/tecnicos/${id}`);
  }

  insert(tecnico: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${API_CONFIG.baseUrl}/tecnicos`, tecnico);
  }

  remove (id: number): Observable<Cliente> {
    return  this.http.delete<Cliente>(`${API_CONFIG.baseUrl}/tecnicos/${id}`);
  }

  update(tecnico: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${API_CONFIG.baseUrl}/tecnicos/${tecnico.id}`, tecnico);
  }
}
