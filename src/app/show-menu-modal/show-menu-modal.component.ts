import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-menu-modal',
  templateUrl: './show-menu-modal.component.html',
  styleUrls: ['./show-menu-modal.component.css'],
})
export class ShowMenuModalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal, private router: Router) {}
  ngOnInit(): void {}
  closeTheModal() {
    this.activeModal.dismiss();
  }
  placeorder() {
    //db logic...

    // dismiss the modal
    this.activeModal.dismiss();

    //this.router.navigate(['menu']);
  }
}
