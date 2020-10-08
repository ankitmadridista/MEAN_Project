import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.css'],
})
export class DeleteUserModalComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}
  closeTheModal() {
    this.activeModal.dismiss();
  }
  async deleteYourself() {
    let email = sessionStorage.getItem('semail');
    let obj = { email };
    //console.log(obj);
    const url = 'http://localhost:3500/del';
    let results = await this.http.post(url, obj).toPromise();
    console.log('on client side', results);

    // incomplete

    if (results) {
      //this.uRowData = false;
      //this.showUsers();
    }

    sessionStorage.removeItem('sid');
    sessionStorage.removeItem('semail');
    // dismiss the modal
    this.activeModal.dismiss();

    this.router.navigate(['login']);
  }
}
