import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Deeplinks } from "@ionic-native/deeplinks/ngx";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  response;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private Deeplinks: Deeplinks,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.setDeepLink();
    });
  }
  setDeepLink() {
    this.Deeplinks.route({
      "/": {},
    }).subscribe(
      (res) => {
        this.response = res;
        alert(JSON.stringify(res));

        this.response = res;
      },
      (err) => {
        this.response = err;
        alert(JSON.stringify(err));
        console.log(err.toString());
      }
    );
  }
}
