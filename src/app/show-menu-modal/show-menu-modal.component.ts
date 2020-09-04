import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-menu-modal',
  templateUrl: './show-menu-modal.component.html',
  styleUrls: ['./show-menu-modal.component.css'],
})
export class ShowMenuModalComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    private router: Router,
    private http: HttpClient
  ) {}
  ngOnInit(): void {}
  closeTheModal() {
    this.activeModal.dismiss();
  }
  async placeorder() {
    //db logic...

    //console.log(sessionStorage.getItem('sid' ));

    let semail = sessionStorage.getItem('semail');
    //console.log(sessionStorage.getItem('semail'));

    let sdata = { semail };
    console.log(sdata);

    //ajax call
    const url = 'http://localhost:3500/updatebill';
    await this.http.post(url, sdata).toPromise();

    //console.log(result);

    // dismiss the modal
    this.activeModal.dismiss();

    //this.router.navigate(['menu']);
  }
}
