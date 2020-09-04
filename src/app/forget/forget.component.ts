import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css'],
})
export class ForgetComponent implements OnInit {
  public uiEmail = true;
  public uiForget = false;
  public uiEmailAlert = false;
  public uiAlert = false;

  public imgsrc = 'assets/forget.svg';
  public fbFormGroup1 = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '^[a-zA-Z0-9_\\.]+@[a-zA-Z0-9_\\.]+(\\.[a-zA-Z0-9_\\.]+)+$'
        ),
      ],
    ],
  });
  public fbFormGroup2 = this.fb.group({
    password: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)],
    ],
    rpassword: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(20)],
    ],
  });
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.uiEmail = true;
    this.uiForget = false;
    this.uiAlert = false;
    sessionStorage.removeItem('fsemail');
  }

  async authEmailHere() {
    const data = this.fbFormGroup1.value;
    sessionStorage.setItem('fsemail', data.email);
    const url = 'http://localhost:3500/emailver';
    const result: any = await this.http.post(url, data).toPromise();
    console.log(data);
    //let x = data.email;

    if (result.msg) {
      this.uiEmail = false;

      this.uiForget = true;
      this.uiEmailAlert = false;

      //sessionStorage.setItem('sid', 'user');
      // this.router.navigate(['home']);
    } else {
      this.uiEmailAlert = true;
      sessionStorage.removeItem('fsemail');
    }
  }

  async updatePassword() {
    const data = this.fbFormGroup2.value;

    if (data.password == data.rpassword) {
      let x = sessionStorage.getItem('fsemail');
      let email = x;
      let password = data.password;

      let obj = { email, password };
      console.log(obj);

      const url = 'http://localhost:3500/updatepassword';
      await this.http.post(url, obj).toPromise();

      sessionStorage.removeItem('fsemail');
      window.alert('Password Succesfully changed...!!!');
      this.router.navigate(['login']);
    } else {
      this.uiAlert = true;
    }
  }
}
