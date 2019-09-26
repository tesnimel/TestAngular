import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  private url = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) {
  }


  public getBooks(value) {
    return this.http.get(encodeURI(this.url + value)).pipe(map(res => res));
  }

  public getBookByISBN(isbn) {
    return this.http.get(encodeURI(this.url + 'isbn:' + isbn + '&maxResults=1'));
  }
}
