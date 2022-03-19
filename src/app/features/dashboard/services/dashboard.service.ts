import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Process } from '../../process/models/process';
import { Risk } from '../../risks/models/risk';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private firestore: Firestore
  ) { }

  getProcesses(){
    return collectionData(collection(this.firestore, 'procesos'))
          .pipe(
            map((snapshot) => {
                return snapshot.length;
            })
        );
   
  }

  getRisks(){
    return collectionData(collection(this.firestore, 'riesgos'))
          .pipe(
            map((snapshot) => {
                return snapshot.length;
            })
        );
   
  }

  getControls(){
    return collectionData(collection(this.firestore, 'controles'))
          .pipe(
            map((snapshot) => {
                return snapshot.length;
            })
        );
   
  }

}
