import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { toArray } from 'rxjs';
import { DashboardService } from 'src/app/protected/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  customerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    cellphone: new FormControl(null, [Validators.required])
  },
  )
  users$: any;
  
  constructor(
    private router: Router,
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    let res = this.dashboardService.getAllCustomers().subscribe( (data) => {
      this.users$ = data.response
    })
    
  }

  registerCustomer() {
    if (!this.customerForm.valid) {
      return;
    }
    this.dashboardService.registerCustomer(this.customerForm.value).subscribe();
  }

}
