import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  public imgsrc = 'assets/3.svg';

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
