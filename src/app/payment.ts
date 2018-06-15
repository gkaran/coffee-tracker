import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface Payment {
  user: string;
  portions: number;
  date: Timestamp;
}
