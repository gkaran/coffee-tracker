import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';
import {User} from 'firebase';
import {filter, map, mergeMap, take} from 'rxjs/operators';
import {CUser} from '../CUser';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$: Observable<User>;
  public cUser$: Observable<CUser>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user$ = afAuth.user;
    this.cUser$ = this.user$.pipe(
      filter(user => !!user),
      mergeMap(user => this.afs.doc<CUser>(`users/${user.uid}`).valueChanges())
    );
  }

  public loginWithGoogle(): Promise<any> {
    return this.afAuth.auth.signInWithPopup(new GoogleAuthProvider());
  }

  public loginWithEmail(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public register(email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  public isAuthed(): boolean {
    return !!this.afAuth.auth.currentUser;
  }

  public logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }

  public updateName(name: string) {
    return this.user$.pipe(
      take(1),
      filter(user => !!user),
      map(user => user.uid),
      mergeMap(uid => this.afs.doc(`users/${uid}`).update({name}))
    );
  }

}
