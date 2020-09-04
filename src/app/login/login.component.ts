import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { faUtensils } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public faUtensils = faUtensils;
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    sessionStorage.removeItem('sid');
    sessionStorage.removeItem('semail');
  }

  async loginProcessHere() {
    const data = this.fbFormGroup.value;
    console.log(data);

    // ajax call
    const url = 'http://localhost:3500/auth-user';
    const result: any = await this.http.post(url, data).toPromise();

    //console.log(result);

    if (result.opr && data.email == 'admin' && data.password == 'admin') {
      sessionStorage.setItem('sid', 'admin');
      this.router.navigate(['admin-home']);
    } else if (result.opr) {
      sessionStorage.setItem('sid', 'user');
      sessionStorage.setItem('semail', data.email);
      console.log(sessionStorage.getItem('sid'));
      console.log(sessionStorage.getItem('semail'));
      this.router.navigate(['home']);
    } else {
      this.uiInvalidCredential = true;
    }
  }
}
