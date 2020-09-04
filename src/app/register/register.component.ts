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
    username: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
        Validators.pattern('^[a-zA-Z0-9]+$'),
      ],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern(
          '^[a-zA-Z0-9_\\.]+@[a-zA-Z0-9_\\.]+(\\.[a-zA-Z0-9_\\.]+)+$'
        ),
      ],
    ],
    mobile: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('[0-9]{10}'),
      ],
    ],
  });
  public uiInvalidCredential = false;

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
    //email verification
    const data = this.fbFormGroup.value;
    let em = data.email;
    let dataEmail = { em };

    const urlver = 'http://localhost:3500/emailver';
    const result: any = await this.http.post(urlver, dataEmail).toPromise();
    if (result.msg == true) {
      this.uiInvalidCredential = true;
    } else {
      this.validateData();
      //console.log(data);
      const url = 'http://localhost:3500/adduser';
      await this.http.post(url, data).toPromise();
      window.alert('Registration Succesfull...!!!');
      this.router.navigate(['login']);
    }
  }
}
