import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../interfaces/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  private url: string = "https://127.0.0.1:8000/ws/personnes";
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem('jeton')}`);
  }

  getAllPersonnes() {
    return this.http.get<Array<Personne>>(this.url);
  }
  getOnePersonne(id: any) {
    return this.http.get<Personne>(`${this.url}/${id}`);
  }
  addPersonne(p: Personne) {
    return this.http.post<Personne>(this.url, p);
  }
  editPersonne(p: Personne) {
    return this.http.put<Personne>(`${this.url}/${p.id}`, p);
  }
  removePersonne(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
