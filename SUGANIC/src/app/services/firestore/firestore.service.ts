import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  //crear nuevo ganado
  public createCat(data: {nombre: string, url: string}) {
    return this.firestore.collection('cats').add(data);
  }

  //Obtener todo los semovientes
  public getCats() {
    return this.firestore.collection('cats').snapshotChanges();
  }


  //Actualiza ganado
  public updateCat(documentId: string, data: any) {
    return this.firestore.collection('cats').doc(documentId).set(data);
  }
}
