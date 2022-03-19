import { 
  Firestore, 
  collectionData, 
  collection, 
  CollectionReference, 
  DocumentData, 
  addDoc
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { from, map } from 'rxjs';
import { Control } from '../models/control';

@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  controlsRef: CollectionReference<DocumentData> = collection(this.firestore, 'controles')

  constructor(
    private firestore: Firestore
  ) { }

  getControls() {
    return collectionData(this.controlsRef)
      .pipe(
        map((snapshot) => {
          return snapshot.map((action) => {
            const data = action as Control;
            return data;
          })
        })
      )
  }

  addControl(control: Control){
    return from(
      addDoc(this.controlsRef, control)
    )
  }
}
