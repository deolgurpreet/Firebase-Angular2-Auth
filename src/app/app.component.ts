import { Component } from '@angular/core';
import { LoginService } from './auth/login.service';

const MAIL = 1;
const TWITTER = 2;
const FACEBOOK = 3;
const GOOGLE = 4;
const GITHUB = 5;
const ANONYMOUS = 6;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  userId = undefined;
  email = "demo@demo.com";
  password = "demodemo";
  error = undefined;
  isRegister = false;
  constructor(private loginService: LoginService) {
  }

  login(index: number) {
    this.error = undefined;
    console.log(" login :" + index);
    switch (index) {
      case MAIL:
        this.loginService.mailLogin(this.email, this.password).then((user) => {
          console.log(user);
          this.userId = user.uid;
        }).catch((error) => {
          this.errorHandler(error);
        });
        break;
      case TWITTER:
        this.loginService.twitterLogin().then((user) => {
          console.log(user.twitter);
          this.userId = user.uid;
        }).catch((error) => {
          this.errorHandler(error);
        });
        break;
      case FACEBOOK:
        this.loginService.facebookLogin().then((user) => {
          console.log(user.facebook);
          this.userId = user.uid;
        }).catch((error) => {
          this.errorHandler(error);
        });
        break;
      case GOOGLE:
        this.loginService.googleLogin().then((user) => {
          console.log(user.google);
          this.userId = user.uid;
        }).catch((error) => {
          this.errorHandler(error);
        });
        break;
      case GITHUB:
        this.loginService.githubLogin().then((user) => {
          console.log(user.github);
          this.userId = user.uid;
        }).catch((error) => {
          this.errorHandler(error);
        });
        break;
      case ANONYMOUS:
        this.loginService.anonymousLogin().then((user) => {
          console.log(user);
          this.userId = user.uid;
        }).catch((error) => {
          this.errorHandler(error);
        });
        break;
      default:
        break;
    }
  }

  logout() {
    this.userId = undefined;
    this.loginService.logout();
  }

  errorHandler(error) {
    this.error = error;
    console.log(error);
  }

  register() {
    this.isRegister = true;
  }

  cancel() {
    this.isRegister = false;
  }


  registerUser() {
    this.loginService.registerUser(this.email, this.password).then(result => {
      this.isRegister = false;
      console.log("register success: " + result);
    }).catch(error => {
      this.errorHandler(error);
    });
  }

}
