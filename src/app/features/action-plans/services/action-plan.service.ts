import { Injectable } from '@angular/core';
import { 
  Firestore, 
  collectionData, 
  collection, 
  CollectionReference, 
  DocumentData, 
  addDoc
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ActionPlanService {

  actionPlanRef: CollectionReference<DocumentData> = collection(this.firestore, 'plan-accion')

  constructor(private firestore: Firestore) { }
}
