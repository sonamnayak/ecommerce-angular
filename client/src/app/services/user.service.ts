import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers!: HttpHeaders
  constructor(private client: HttpClient) {
    this.headers = new HttpHeaders({'content-type': 'application/json'})
  }

  getUsers(): Observable<User[]> {
    return this.client.get<User[]>(env.apiAddress + '/user')
  }

  getUser(id: string): Observable<User[]> {
    return this.client.get<User[]>(env.apiAddress + '/user/' + id)
  }

  addUser(user: User): Observable<HttpResponse<any>> {
    return this.client.post(env.apiAddress + '/user', JSON.stringify(user), {headers: this.headers, observe: 'response'})
  }
}
