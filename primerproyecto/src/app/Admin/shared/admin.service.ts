import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Admin } from './admin';

@Injectable({
  providedIn: "root"
})
export class AdminService {
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
    id: number // : Observable<admin>
  ) {
    const url = `${environment.AdminServiceBaseUrl}/admins/${id}`;
    return this.get<Admin>(url);
  }

  findAll() {
    const url = `${environment.AdminServiceBaseUrl}/admins`;
    return this.get<Admin[]>(url);
  }

  update(admin: Admin) {
    const url = `${environment.AdminServiceBaseUrl}/admins/${admin.id}`;
    return this.put(url, {
      estacion: admin.estacion,
      dia: admin.dia,
      hora: admin.hora
    });
  }
  create(admin: Admin) {
    const url = `${environment.AdminServiceBaseUrl}/admins`;
    return this.post(url, {
      estacion: admin.estacion,
      dia: admin.dia,
      hora: admin.hora
    });
  }
}
