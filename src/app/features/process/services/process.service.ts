import { ProcessCategory } from './../models/process-category';
import { Process } from './../models/process';
import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { from, map } from 'rxjs';
import { addDoc, collection } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  constructor(
    private firestore: Firestore
  ) { }

  // getProcesses(){
  //   return this.firestore.collection("procesos")
  //     .snapshotChanges()
  //     .pipe(
  //         map((snapshot) => {
  //             return snapshot.map((action) => {
  //                 const data = action.payload.doc.data() as Process;
  //                 data.uid = action.payload.doc.id;
  //                 return data;
  //             });
  //         })
  //     )
  // }

  getProcesses(){
    return collectionData(collection(this.firestore, 'procesos'))
          .pipe(
            map((snapshot) => {
                return snapshot.map((action) => {
                    console.log(action);
                    const data = action as Process;
                    return data;
                });
            })
        );
   
  }

  getCategories(){
    return collectionData(collection(this.firestore, 'categorias_procesos'))
          .pipe(
            map((snapshot) => {
                return snapshot.map((action) => {
                    console.log(action);
                    const data = action as ProcessCategory;
                    return data;
                });
            })
        );
   
  }

  getTypes(){
    return collectionData(collection(this.firestore, 'tipos_procesos'))
          .pipe(
            map((snapshot) => {
                return snapshot.map((action) => {
                    console.log(action);
                    const data = action as ProcessCategory;
                    return data;
                });
            })
        );
  }


  addProcess(process: Process){
    const ref = collection(this.firestore, 'procesos');
    return from(
      addDoc(ref, process)
    ) 
  }

}
