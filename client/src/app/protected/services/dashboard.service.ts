import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, tap } from 'rxjs';
import { CustomerCreationRequest, CustomerCreationResponse, CustomersResponse } from 'src/app/public/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
  ) { }

  registerCustomer(customerCreationRequest: CustomerCreationRequest): Observable<CustomerCreationResponse> {
    return this.http.post<CustomerCreationResponse>('http://localhost:3000/customers/', customerCreationRequest).pipe(
      tap((res: CustomerCreationResponse) => this.snackbar.open(`Customer created successfully`, 'Close', {
        duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
      })),
    );
  }

  getAllCustomers(): Observable<CustomersResponse> {
    return this.http.get<CustomersResponse>('http://localhost:3000/customers/');
  }
}
