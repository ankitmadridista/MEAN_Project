import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  async loginProcessHere() {
    const data = this.fbFormGroup.value;
    console.log(data);

    // ajax call
    const url = 'http://localhost:3500/auth-user';
    const result: any = await this.http.post(url, data).toPromise();

    //console.log(result);

    if (result.opr && data.username == 'admin' && data.password == 'admin') {
      sessionStorage.setItem('sid', 'admin');
      this.router.navigate(['admin-home']);
    } else if (result.opr) {
      sessionStorage.setItem('sid', 'user');
      this.router.navigate(['home']);
    } else {
      this.uiInvalidCredential = true;
    }
  }
}
