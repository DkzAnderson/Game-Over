import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { auth } from '../config/firebase'



// Funciones de autenticación
export const registerUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = () => {
    return signOut(auth);
};

export const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      const result = await signInWithPopup(auth, provider);
      
      
      return result.user;
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      throw error;
    }
};
  