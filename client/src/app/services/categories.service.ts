import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Category } from '../models/category.model';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private client: HttpClient) {}

  getCategoriesData(): Observable<Category[]> {
    return this.client.get<Category[]>(env.apiAddress + '/cat' )
  }
} 
