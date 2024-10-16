import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Hent data
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

// Tilføj data
export const addDataFirebase = async (collectionName: string, data: any) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
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
