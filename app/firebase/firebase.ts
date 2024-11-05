import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc, getDoc, increment } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Hent en hel tabel data
export const fetchDataFirebase = async (collectionName: string) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const dataList: any[] = [];
    querySnapshot.forEach((doc) => {
      dataList.push({ id: doc.id, ...doc.data() });
    });
    return dataList;
  } catch (error) {
    console.error("Error fetching documents: ", error);
    return [];
  }
};

// Hent et enkelt dokument
export const fetchSingleDocumentFirebase = async (collectionName: string, docId: string) => {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document: ", error);
    return null;
  }
};

// Tilføj data
export const addDataFirebase = async (collectionName: string, data: any) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

// Update data
export const updateDataFirebase = async (collectionName: string, docId: string, data: any) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, data);
    console.log("Document updated with ID: ", docId);
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};

// increment enkelt dokument
export const incrementDocumentFirebase = async (collectionName: string, docId: string, fieldName: string, value: number) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, { [fieldName]: increment(value) });
    console.log("Document edited with ID: ", docId);
  } catch (error) {
    console.error("Error editing document: ", error);
  }
};

// Slet data
export const deleteDataFirebase = async (collectionName: string, docId: string) => {
    try {
      await deleteDoc(doc(db, collectionName, docId));
      console.log("Document deleted with ID: ", docId);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };
