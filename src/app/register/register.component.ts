import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  validateData() {
    const data = this.fbFormGroup.value;
    data.username = data.username.trim();
    data.password = data.password.trim();
    data.email = data.email.trim();
    data.mobile = data.mobile.trim();

    console.log(data);
  }

  async registerHere() {
    this.validateData();
    const data = this.fbFormGroup.value;
    //console.log(data);
    const url = 'http://localhost:3500/adduser';

    await this.http.post(url, data).toPromise();

    //this.router.navigate(['login']);
  }
}
