import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css'],
})
export class AdminMenuComponent implements OnInit {
  public arr;
  public userData = false;
  public menuData = false;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  async showUsers() {
    //ajax call
    const url = 'http://localhost:3500/showusers';
    const result: any = await this.http.get(url).toPromise();
    console.log(result);

    this.arr = result;

    this.userData = true;
    this.menuData = true;
  }

  async del(input) {
    //ajax call
    let obj = { input };
    console.log(obj);
    const url = 'http://localhost:3500/del';
    let results = await this.http.post(url, obj).toPromise();
    //console.log('on client side', results);

    if (results) {
      this.menuData = false;
      this.userData = false;
    }
  }
}
