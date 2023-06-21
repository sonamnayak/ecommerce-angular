import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {
  constructor() { }
  searchText!: string
  searchDataEmitter: EventEmitter<string> = new EventEmitter<string>()
  searchData(text: string) {
    this.searchText = text
    this.searchDataEmitter.emit(this.searchText)
  }
}
