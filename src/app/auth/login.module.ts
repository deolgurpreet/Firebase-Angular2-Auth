import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AuthProviders } from 'angularfire2';
import { AuthMethods } from 'angularfire2';

export const firebaseConfig = {
    // TODO : change your firebase configuration.
    apiKey: '<YOUR_API_KEY>',
    authDomain: '<YOUR_AUTH_DOMAIN>',
    databaseURL: '<YOUR_DATABASE_URL>',
    storageBucket: '<YOUR_STORAGE_BACKET>'
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
Contact GitHub API Training Shop Blog About
