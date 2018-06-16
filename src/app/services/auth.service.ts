import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import {User} from 'firebase';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.user;
  }

  public loginWithGoogle(): Promise<any> {
    return this.afAuth.auth.signInWithPopup(new GoogleAuthProvider());
  }

  public isAuthed(): boolean {
    return !!this.afAuth.auth.currentUser;
  }

  public logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }

}
