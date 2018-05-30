import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface Portion {
  date: Timestamp;
  amount: number;
}
