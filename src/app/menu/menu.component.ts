import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShowMenuModalComponent } from '../show-menu-modal/show-menu-modal.component';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { FormBuilder, Validators } from '@angular/forms';
import { DeleteUserModalComponent } from '../delete-user-modal/delete-user-modal.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public menu = false;
  public accDet = false;
  public tempo;
  public arr;
  public tempAcc;
  public arrAcc;
  public faSignInAlt = faSignInAlt;
  public faTrash = faTrash;
  public sundayInd = false;
  public alertEmail = false;
  public inputEmail = false;

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

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  async showMenu() {
    let x = new Date();
    let data = x.getDay();
    console.log('data', data);
    let y = '';
    if (data == 1) {
      y = 'monday';
    }
    if (data == 2) {
      y = 'tuesday';
    }
    if (data == 3) {
      y = 'wednesday';
    }
    if (data == 4) {
      y = 'thursday';
    }
    if (data == 5) {
      y = 'friday';
    }
    if (data == 6) {
      y = 'saturday';
    }

    if (y == '') {
      this.sundayInd = true;
    } else {
      let abc = { y };

      // console.log('y', y);
      // console.log(abc);

      // ajax call
      const url = 'http://localhost:3500/showmenu';
      const result: any = await this.http.post(url, abc).toPromise();
      console.log(result);
      this.tempo = result;
      this.arr = this.tempo[0];

      this.menu = true;
    }
    //
  }
  async book() {
    this.modalService.open(ShowMenuModalComponent, {
      centered: true,
    });
  }

  async getAccDet() {
    const url = 'http://localhost:3500/getaccdet';
    let email = sessionStorage.getItem('semail');
    let semail = { email };
    console.log(semail);
    const result: any = await this.http.post(url, semail).toPromise();
    console.log(result);
    this.tempAcc = result;
    this.arrAcc = this.tempAcc[0];

    this.accDet = true;
  }

  public deleteSelf() {
    this.inputEmail = true;
  }

  async chekEmail() {
    const data = this.fbFormGroup1.value;
    const url = 'http://localhost:3500/emailver';
    const result: any = await this.http.post(url, data).toPromise();
    console.log(data);

    if (result.msg) {
      this.alertEmail = false;

      this.modalService.open(DeleteUserModalComponent, {
        centered: true,
      });
    } else {
      this.alertEmail = true;
      sessionStorage.removeItem('fsemail');
    }
  }
}
