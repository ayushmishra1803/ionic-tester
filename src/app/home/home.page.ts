import { Component, OnInit } from '@angular/core';
import { Instagram } from '@ionic-native/instagram/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private insta:Instagram) {}
  ngOnInit(): void {
 
  }

}
