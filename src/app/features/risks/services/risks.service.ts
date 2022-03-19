import { Probability } from './../models/probability';
import { Risk } from './../models/risk';
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
import { Impact } from '../models/impact';

@Injectable({
  providedIn: 'root'
})
export class RisksService {

  riskRef: CollectionReference<DocumentData> = collection(this.firestore, 'riesgos')
  impactsRef: CollectionReference<DocumentData> = collection(this.firestore, 'impactos')
  probRef: CollectionReference<DocumentData> = collection(this.firestore, 'probabilidades')

  constructor(
    private firestore: Firestore
  ) { }

  // getRisks(){
  //   return this.afs.collection('riesgos')
  //     .snapshotChanges()
  //     .pipe(
  //       map((snapshot) => {
  //         return snapshot.map((action) => {
  //           const id = action.payload.doc.id;
  //           const data = action.payload.doc.data() as Risk;
  //           data.uid = id;
  //           return data;
  //         })
  //       })
  //     )
  // }

  getRisks() {
    return collectionData(this.riskRef)
      .pipe(
        map((snapshot) => {
          return snapshot.map((action) => {
            const data = action as Risk;
            return data;
          })
        })
      )
  }

  getImpacts() {
    return collectionData(this.impactsRef)
      .pipe(
        map((snapshot) => {
          return snapshot.map((action) => {
            const data = action as Impact;
            return data;
          })
        })
      )
  }

  getProbabilities() {
    return collectionData(this.probRef)
      .pipe(
        map((snapshot) => {
          return snapshot.map((action) => {
            const data = action as Probability;
            return data;
          })
        })
      )
  }

  addRisk(risk: Risk){

    return from(
      addDoc(this.riskRef, risk)
    ) 
  }
}
