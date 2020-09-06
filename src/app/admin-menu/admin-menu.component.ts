import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css'],
})
export class AdminMenuComponent implements OnInit {
  public uarr;
  public marr;
  public userData = false;
  public uRowData = false;
  public menuData = false;
  public mRowData = false;
  public faTrash = faTrash;
  public faSignInAlt = faSignInAlt;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  async showUsers() {
    /*if (this.userData == true && this.uRowData == true) {
      this.userData = false;
      this.uRowData = false;
    } else {}*/
    //ajax call
    const url = 'http://localhost:3500/showusers';
    const result: any = await this.http.get(url).toPromise();
    console.log(result);

    this.uarr = result;

    this.userData = true;
    this.uRowData = true;
  }

  async del(input) {
    //ajax call
    let obj = { input };
    //console.log(obj);
    const url = 'http://localhost:3500/del';
    let results = await this.http.post(url, obj).toPromise();
    //console.log('on client side', results);

    if (results) {
      this.uRowData = false;
      this.showUsers();
    }
  }

  async showAdminMenu() {
    //ajax call

    const url = 'http://localhost:3500/showadminmenu';
    const result: any = await this.http.get(url).toPromise();
    console.log(result);

    this.marr = result;

    if (this.menuData == false && this.mRowData == false) {
      this.menuData = true;
      this.mRowData = true;
    } /*else if (this.menuData == true && this.mRowData == true) {
      this.menuData = false;
      this.mRowData = false;
    }*/
  }
}
