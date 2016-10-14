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
  titleMessage = "";

  userId = undefined;
  displayName = undefined;
  photoURL = undefined;

  email = "demo@demo.com";
  password = "demodemo";
  error = undefined;
  isRegister = false;
  constructor(private loginService: LoginService) {
    this.titleMessage = "Please Sign In";
  }

  login(index: number) {
    this.error = undefined;
    switch (index) {
      case MAIL:
        this.loginService.mailLogin(this.email, this.password).then((user) => {
          this.setData(user);
        }).catch((error) => {
          this.errorHandler(error);
        });
        break;
      case TWITTER:
        this.loginService.twitterLogin().then((user) => {
          this.setData(user);
        }).catch((error) => {
          this.errorHandler(error);
        });
        break;
      case FACEBOOK:
        this.loginService.facebookLogin().then((user) => {
          this.setData(user);
        }).catch((error) => {
          this.errorHandler(error);
        });
        break;
      case GOOGLE:
        this.loginService.googleLogin().then((user) => {
          this.setData(user);
        }).catch((error) => {
          this.errorHandler(error);
        });
        break;
      case GITHUB:
        this.loginService.githubLogin().then((user) => {
          this.setData(user);
        }).catch((error) => {
          this.errorHandler(error);
        });
        break;
      case ANONYMOUS:
        this.loginService.anonymousLogin().then((user) => {
          this.setData(user);
        }).catch((error) => {
          this.errorHandler(error);
        });
        break;
      default:
        break;
    }
  }

  setData(user) {
    this.titleMessage = "Login Success.";
    this.userId = user.uid;
    this.displayName = user.auth.displayName;
    this.photoURL = user.auth.photoURL;
  }

  logout() {
    this.userId = undefined;
    this.loginService.logout();
  }

  errorHandler(error) {
    this.error = error;
    console.log(error);
    this.titleMessage = "ERROR";
  }

  register() {
    this.isRegister = true;
    this.titleMessage = "Register Form";
  }

  cancel() {
    this.isRegister = false;
    this.titleMessage = "Please Sign In";
  }

  registerUser() {
    this.loginService.registerUser(this.email, this.password).then(result => {
      this.isRegister = false;
      this.titleMessage = "Register Success.";
      console.log("register success: " + result);
    }).catch(error => {
      this.errorHandler(error);
    });
  }

}
