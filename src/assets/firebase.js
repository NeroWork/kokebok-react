import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, query, where } from "firebase/firestore"

//Conecto la api de firebase
const firebaseConfig = {
  apiKey: "AIzaSyAvgMpRgtdxlaNUixdxNrCPWZdqcNe4A2E",
  authDomain: "reactkokebok.firebaseapp.com",
  projectId: "reactkokebok",
  storageBucket: "reactkokebok.appspot.com",
  messagingSenderId: "220028597108",
  appId: "1:220028597108:web:ea07009b53f92acf40b221",
  measurementId: "G-DFF06B9PWP"
};

//Inicializo la app y creo la base de datos
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Sincronizacion simple
export const fireFetch = async () => {
    const productsCollectionRef = collection(db, "productos");

    const snapshot = await getDocs(productsCollectionRef);
    const docsData = snapshot.docs.map((doc) => {
        return({...doc.data(), id: doc.id});
    });
    if(docsData.length > 0){
        return(docsData);
    } else {
        throw TypeError("No se ha encontrado ningun objeto");
    }
}


//Sincronizacion de un objeto individual
export const fireIndividualFetch = async (itemId) => {
    const productsCollectionRef = collection(db, "productos");
    const productRef = doc(productsCollectionRef, itemId);

    const snapshot = await getDoc(productRef);
    if(snapshot.exists()){
        return({...snapshot.data(), id: snapshot.id});
    } else {
        throw TypeError("No se ha encontrado el objeto buscado");
    }
}

//Sincronizacion por categoria
export const firePersonalizadoFetch = async (catego) => {
    const productsCollectionRef = collection(db,"productos");
    let q;
    if(catego === "oferta"){
        q = query(productsCollectionRef, where("oferta", "==", true));
    } else {
        q = query(productsCollectionRef, where("categoria","==", catego));
    }
    const querySnapshot = await getDocs(q);
    const docsData = querySnapshot.docs.map((doc) =>{
        return({...doc.data(), id: doc.id});
    })
    if(docsData.length > 0){
        return(docsData);
    } else{
        throw TypeError("No se han encontrado los objetos buscados");
    }
}