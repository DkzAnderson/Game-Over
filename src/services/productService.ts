import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";

// Referencia a la colección de productos
const productCollection = collection(db, "products");

// Funciones para manejar los productos
export const getProducts = async () => {
    const querySnapshot = await getDocs(productCollection);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addProduct = async (product: { name: string, price: number, description: string }) => {
    return await addDoc(productCollection, product);
};

export const updateProduct = async (id: string, updatedProduct: { name?: string, price?: number, description?: string }) => {
    const productDoc = doc(db, "products", id);
    return await updateDoc(productDoc, updatedProduct);
};

export const deleteProduct = async (id: string) => {
    const productDoc = doc(db, "products", id);
    return await deleteDoc(productDoc);
};
