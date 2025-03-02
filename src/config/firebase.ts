import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase desde variables de entorno
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios
export const auth = getAuth(app);
export const db = getFirestore(app);


/* Revisar este codigo para agregar el atributo ADMIN a usuarios */

// Opcion 1 -> Usar Custom Claims (Reclamaciones personalizadas)
/*

import * as admin from "firebase-admin";

// Establecer el atributo 'Admin' para un usuario
admin.auth().setCustomUserClaims("USER_UID", { admin: true })
  .then(() => {
      console.log("Reclamación personalizada establecida");
  })
  .catch((error) => {
      console.error("Error al establecer la reclamación:", error);
  });

----------------------------------------

import { getAuth } from "firebase/auth";

const auth = getAuth();
auth.currentUser?.getIdTokenResult()
  .then((idTokenResult) => {
      if (idTokenResult.claims.admin) {
          console.log("El usuario es administrador");
      } else {
          console.log("El usuario es regular");
      }
  })
  .catch((error) => {
      console.error("Error al obtener el token:", error);
  });
*/

// Opcion 2 -> Crear colección de usuarios en firestore
// Probablemente se utilice esta opción
/*

import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();
const saveUserRole = async (uid: string, isAdmin: boolean) => {
    await setDoc(doc(db, "users", uid), {
        admin: isAdmin,
    });
};

saveUserRole("USER_UID", true); // Guardar como administrador

--------------------------------------------------

import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();
const checkUserRole = async (uid: string) => {
    const userDoc = await getDoc(doc(db, "users", uid));
    if (userDoc.exists() && userDoc.data().admin) {
        console.log("El usuario es administrador");
    } else {
        console.log("El usuario es regular");
    }
};

checkUserRole("USER_UID");


*/