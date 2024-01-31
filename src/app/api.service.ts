import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators'


//ecorator marks a class as a service that can be injected into other components or services.
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

//Angular uses observables to handle asynchronous operations, such as HTTP requests.
getData(): Observable<any> {
  return this.http.get<any>(this.apiUrl)
    .pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        throw error; // You can also return a user-friendly error message
      })
    );
}
}
