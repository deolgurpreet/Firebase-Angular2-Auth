import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmailPipe, HighlightDirective } from './shared/index';
import { AppComponent } from './app.component';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { LoginModule } from './auth/login.module';
import { LoginService } from './auth/login.service';

@NgModule({
  declarations: [
    AppComponent,
    EmailPipe,
    HighlightDirective
  ],

  imports: [
    BrowserModule,
    AlertModule,
    LoginModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
