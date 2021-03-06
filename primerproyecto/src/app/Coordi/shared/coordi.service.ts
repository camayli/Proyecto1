import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Coordi } from './coordi';

@Injectable({
  providedIn: "root"
})
export class CoordiService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError("An error has occurred");
  }

  private get<T>(url): Observable<T> {
    console.log("get:", url);
    return this.http
      .get<T>(url, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          "Accept": "application/json"
        })
      })
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }

  private post<T>(url, data: T): Observable<T> {
    console.log("post:", url);
    return this.http
      .post<T>(url, data, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      })
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }
  private put<T>(url, data: T): Observable<T> {
    console.log("put:", url);
    return this.http.put<T>(url, data).pipe(
      // retry(5),
      catchError(this.handleError)
    );
  }

  findById(
    id: number // : Observable<coordi>
  ) {
    const url = `${environment.CoordiServiceBaseUrl}/coordis/${id}`;
    return this.get<Coordi>(url);
  }

  findAll() {
    const url = `${environment.CoordiServiceBaseUrl}/coordis`;
    return this.get<Coordi[]>(url);
  }

  update(coordi: Coordi) {
    const url = `${environment.CoordiServiceBaseUrl}/coordis/${coordi.id}`;
    return this.put(url, {
      ciudad: coordi.ciudad,
      direccion: coordi.direccion,
      bus: coordi.bus,
      modelo: coordi.modelo,
      name: coordi.name,
      placa: coordi.placa,
      telefono: coordi.telefono
    });
  }
  create(coordi: Coordi) {
    const url = `${environment.CoordiServiceBaseUrl}/coordis`;
    return this.post(url, {
      ciudad: coordi.ciudad,
      direccion: coordi.direccion,
      bus: coordi.bus,
      modelo: coordi.modelo,
      name: coordi.name,
      placa: coordi.placa,
      telefono: coordi.telefono
    });
  }
}
