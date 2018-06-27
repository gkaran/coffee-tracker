import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {CUser} from '../CUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private afs: AngularFirestore) { }

  public getAllUsers(): Observable<CUser[]> {
    return this.afs.collection<CUser>('/users').valueChanges();
  }
}
