import { initializeApp } from "firebase/app";
import { Product } from "../types/product";

import { 
    getFirestore ,doc, 
    setDoc,collection,
    getDoc, getDocs,
    DocumentSnapshot,
    updateDoc
} from "firebase/firestore";

export const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

/* Escritura de datos */

// convierte una 'Serie' en un objeto regular
// para que se pueda subir con 'setDoc'
const ConvertToObject = (serie: Serie): Record<string, any> => { 
    return { 
        name: serie.name, 
        seasons: serie.seasons.map(season => ({
             name: season.name, 
             episodes: season.episodes, 
             image: season.image 
            })), images: serie.images, 
            categories: serie.categories, 
            description: serie.description 
        }; 
};
//actualiza una serie
export const UploadNewSerie = async (
    data: Serie, 
    collectionId: string='series'
)=>{

    const dataConverted = ConvertToObject(data);
    try { 
        const docRef = doc(db, collectionId, data.name);
         await setDoc(docRef, dataConverted)
        } catch (e) { 
        console.error("Error adding document: ", e); 
    }

}

export const UploadComment = async (
    comment: Comment,
    season:number, 
    episode:number,
    serieId:string
)=>{
    let currentSerie:Serie = await GetSerieFromDb(serieId);

    // evaluación de si la serie existe
    if(currentSerie != null){
        //evaluar la estructura del episodio donde se guardan los comentarios
        if(currentSerie.seasons[season].episodes[episode].comments != null){
            currentSerie.seasons[season].episodes[episode].comments.unshift(comment);
            UploadNewSerie(currentSerie,'series');
        } else {
            console.log('estructura incorrecta.')
        }
    }

    return currentSerie.seasons[season].episodes[episode].comments;

}

export const GetCommentsList = async (
    season: number, 
    episode: number,
    serieId: string,
)=>{

    const data: Serie = await GetSerieFromDb(serieId);

    if(data != null){
        const values: Comment[] = data.seasons[season].episodes[episode-1].comments;

        return values;
    }
}

// sin aparente uso por ahora

/*

export const AddDataToDb = async ()=>{
    // Crea una colección nueva y un documento
    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

-------------------------------------------------


export const CreateNewDoc = async (data:object)=>{

    // Agrega un nuevo documento en la coleccion 'cities'
    await setDoc(doc(db, "series", "LS"),data);

    // Combina los datos del documento anterior con el enviado
    //const cityRef = doc(db, 'cities', 'BJ');
    //setDoc(cityRef, { capital: true }, { merge: true });
}

--------------------------------------------------

export const UpdateValue = async ()=>{
    const washingtonRef = doc(db, "cities", "DC");
// Actualiza sin reemplazar 
// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, {
  capital: true
});
}

----------------------------------------------------

// Actuaiza campos de objetos anidados
// Create an initial document to update.
const frankDocRef = doc(db, "users", "frank");
await setDoc(frankDocRef, {
    name: "Frank",
    favorites: { food: "Pizza", color: "Blue", subject: "recess" },
    age: 12
});

// To update age and favorite color:
await updateDoc(frankDocRef, {
    "age": 13,
    "favorites.color": "Red"
});

*/


/* Lectura de datos */

//obtiene una unica serie mediande su 'id'=nombre de la serie
export const GetSerieFromDb = async (id: string) => {
    const docRef = doc(db, "series", id);
    const docSnap = await getDoc(docRef);
    let data:Serie | any;

    if (docSnap.exists()) {
        data =  docSnap.data();
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
    return data;
}
//Convierte los objetos devuelto de firebase
// en 'Serie'
function convertDocToSerie(doc: DocumentSnapshot): Serie { 
    const data = doc.data();
     if (!data) {
         throw new Error("Document data is undefined");
         } 
         return { 
            name: data.name, 
            seasons: data.seasons, 
            categories: data.categories, 
            description: data.description, 
            images: data.images 
        }; }

// obtiene todas las series de una coleccion
export const GetAllSeriesFromDb = async (
    collectionId: string='series') => {
    let data : Serie[] = [];
    //obtener datos
    const querySnapshot = await getDocs(collection(db,collectionId));
    //recorrer array de datos obtenidos
    querySnapshot.forEach((doc) => {
        try {
            data.push(convertDocToSerie(doc));
        } catch (error) {
            console.log('error al convertir serie')
        }

    });
    //devolver array con datos
    return data;
}

// obtener lista de favoritos 
export const GetFavorites = async (
    userId: string)=>{
    
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const userData = docSnap.data();
        const favorites = userData?.favorites;
        // comprobación de que la lista no este vacía
        if(favorites.length <= 0){
            return null
        } else {
            // devuelve la lista de favoritos
            return favorites
        }
    } else {
        // docSnap.data() will be undefined in this case
        return null;
    }
}

// Agregar favorito
export const AddNewFavorite = async (
    serieId: string,
    userId: string
) => {
    // obtener lista de favoritos
    // modificar
    // reemplazar

    // obtener

    try {
        const userDocRef = doc(db, 'users', userId);
        const userDoc = await getDoc(userDocRef);
        const userData = userDoc.data();

        if (userData !== null &&
            userData !== undefined &&
            'favorites' in userData
        ) {

            const currentList = userData.favorites
            // evalua si la serie ya se encuentra en la lista
            const contain = currentList.includes(`${serieId}`);
            let newFavorites = currentList;
            // la agrega a la lista
            if (contain === false) newFavorites.push(`${serieId}`)


            if (userDoc.exists()) {
                // Crea o actualiza el campo 'favorites'
                await updateDoc(userDocRef, {
                    favorites: newFavorites
                });
                console.log('Favoritos actualizados correctamente.');
            } else {
                await setDoc(userDocRef, {
                    favorites: newFavorites
                });
                console.log('documento creado')
            }

        } else {
            let currentList = [];
            currentList.push(`${serieId}`);
            const newFavorites = currentList;
            console.log(newFavorites)

            await setDoc(userDocRef, {
                favorites: newFavorites
            });
            console.log('documento creado')
        }



    } catch (error) {
        console.log('Error subiendo documento', error);
    }


}
// Eliminar Favorito
export const DeleteFavorite = async (
    serieId: string,
    userId: string
) => {
    // favoritos del usuario
    const data: string[] = await GetFavorites(userId);

    if(data != null && data != undefined){
        // eliminar favorito seleccionado
        const newData = data.filter(item => item !== serieId);

        try {
            const userDocRef = doc(db, 'users', userId);
            const userDoc = await getDoc(userDocRef);
            const userData = userDoc.data();
    
            if (userData !== null &&
                userData !== undefined &&
                'favorites' in userData
            ) {

                if (userDoc.exists()) {
                    // Crea o actualiza el campo 'favorites'
                    await updateDoc(userDocRef, {
                        favorites: newData
                    });
                    console.log('Favoritos actualizados correctamente.');
                } else {
                    await setDoc(userDocRef, {
                        favorites: newData
                    });
                    console.log('documento creado')
                }
    
            } else {
                await setDoc(userDocRef, {
                    favorites: newData
                });
                console.log('documento creado')
            }

        } catch (error) {
            console.log('Error subiendo documento', error);
        }
    }
}





