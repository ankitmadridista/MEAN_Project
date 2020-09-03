import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogoutModalComponent } from '../logout-modal/logout-modal.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('sid') != 'admin') {
      this.router.navigate(['login']);
    }
  }
  processLogout() {
    //sessionStorage.removeItem('sid');
    //this.router.navigate(['login']);
    // open modal
    this.modalService.open(LogoutModalComponent, {
      centered: true,
    });
  }
}
