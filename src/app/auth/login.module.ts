import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AuthProviders } from 'angularfire2';
import { AuthMethods } from 'angularfire2';

export const firebaseConfig = {
    // TODO : change your firebase configuration.
    apiKey: 'AIzaSyAPaLA-10e8jMkvHHsnUq42Zbjn_aZ-rLw',
    authDomain: 'angular2login-92917.firebaseapp.com',
    databaseURL: 'https://angular2login-92917.firebaseio.com/',
    storageBucket: 'gs://angular2login-92917.appspot.com'
}

const myFirebaseAuthConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Popup
}

@NgModule({
    imports: [
        AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
    ],
})
export class LoginModule { }