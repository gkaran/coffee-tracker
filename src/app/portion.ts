import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface Portion {
  user: string;
  date: Timestamp;
  amount: number;
}
