import { 
    collection, getDocs, setDoc, doc, 
    updateDoc, deleteDoc , query,
    orderBy, limit, startAfter,
    where
} from "firebase/firestore";
import { db } from "../config/firebase";
import { GPU } from "../types/gpu";
import { MotherBoard } from "../types/motherBoard";
import { Processor } from "../types/processors";
import { PowerSource } from "../types/powerSource";
import { RamMemories } from "../types/ramMemories";


export interface fetchOrderProps {
    type: 'price' | 'title' ;
    order: 'asc' | 'desc';
}

// Referencia a la colección de productos
const productCollection = (col: string)=> collection(db,col);

function convertProductFromFirebase(data: any){
    // se evalua el tipo según su categoría
    // y se retorna un objeto con la clase que corresponda
    switch (data.category) {
        case 'Fuentes de poder':
            return new PowerSource({...data})
            break;
        case 'Tarjetas madre':
            return new MotherBoard({...data})
            break;
        case 'Tarjetas de video':
            return new GPU({...data})
            break;
        case 'Procesadores':
            return new Processor({...data})
            break;
        default:
            // si el objeto no concuerda con 
            // las clases mencionada
            console.log(`Tipo de producto no registrado, 
                no se recibira.`, data)
            break;
    }
}
//devuelve el nombre del dcumento según la categoría del producto
function getProductType(product: GPU | MotherBoard | Processor | PowerSource | RamMemories){
    let productType: string = "";
    // Evalúa el tipo de producto
    if (product instanceof GPU) productType = "graphic_cards";
    if (product instanceof PowerSource) productType = "power_sources";
    if (product instanceof MotherBoard) productType = "mother_boards";
    if (product instanceof Processor) productType = "processors";
    if (product instanceof RamMemories) productType = "ram_memories";

    return productType;
}
// Funciones para manejar los productos
export const getProductsCount = async (productType: string, brand?: string) => {
    let productRef = collection(db, productType); // Aseguramos que `db` es el Firestore instance

    // Creamos la consulta base con el filtro por marca si está presente
    let productQuery;
    if (brand) {
        productQuery = query(productRef, where('brand', '==', brand));
    } else {
        productQuery = productRef;
    }

    const querySnapshot = await getDocs(productQuery);
    return querySnapshot.size; // Utilizamos `size` para obtener el conteo total de documentos
};

export const getProducts = async (
    productType: string,
    order: { type: string, order: 'asc' | 'desc' },
    productsPerPage: number = 20,
    startAfterDoc: any = null,
    brand?: string
) => {
    let products: Array<MotherBoard | GPU | PowerSource | Processor | RamMemories> = [];

    // Asegúrate de tener la referencia correcta a la colección
    let productRef = collection(db, productType);

    // Creamos la consulta base con los parámetros de orden y límite
    let productQuery = query(
        productRef,
        orderBy(order.type, order.order),
        limit(productsPerPage)
    );

    // Agregar el filtro por marca si está presente
    if (brand) {
        productQuery = query(
            productRef,
            where('brand', '==', brand),
            orderBy(order.type, order.order),
            limit(productsPerPage)
        );
    }

    // Añadimos el cursor para la paginación si se proporciona y si el `brand` no está presente
    if (startAfterDoc && !brand) {
        productQuery = query(
            productRef,
            orderBy(order.type, order.order),
            startAfter(startAfterDoc),
            limit(productsPerPage)
        );
    }

    // Añadimos el cursor para la paginación si se proporciona y si el `brand` está presente
    if (startAfterDoc && brand) {
        productQuery = query(
            productRef,
            where('brand', '==', brand),
            orderBy(order.type, order.order),
            startAfter(startAfterDoc),
            limit(productsPerPage)
        );
    }

    const querySnapshot = await getDocs(productQuery);

    // Obtenemos un arreglo con los resultados
    const results: any[] = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Verificamos que el resultado no sea undefined / array vacío
    if (results && results.length > 0) {
        // Iteramos, convertimos y agregamos los productos
        results.forEach(element => {
            const convertedProduct = convertProductFromFirebase(element);
            if (convertedProduct) products.push(convertedProduct);
        });
    }

    // Retornamos los productos junto con el último documento para la paginación
    return { products, lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1] };
};

export const addProduct = async (
    product: GPU | MotherBoard | Processor | PowerSource | RamMemories
  ) => {

    const productType = getProductType(product);

    const productId = product.fullTitle;
    if (!productId) {
      throw new Error("El producto no tiene un atributo 'fullTitle'.");
    }
  
    // Serializar el producto a un formato compatible con Firebase
    const serializedProduct = product.toFirebase();
  
    // subir producto con id personalizado.
    await setDoc(
      doc(productCollection(productType), productId), // Referencia al documento con ID 'fullTitle'
      serializedProduct
    );

    //getProducts(productType)

};

export const updateProduct = async (
  updatedProduct: GPU | MotherBoard | Processor | PowerSource | RamMemories
) => {
  // Validamos que el producto tenga los atributos necesarios
  if (!updatedProduct.category || !updatedProduct.fullTitle) {
    throw new Error("El producto actualizado debe tener 'category' y 'fullTitle'.");
  }

  // nombre de la colección donde se buscara el producto
  const productType = getProductType(updatedProduct);

  // ID del documento
  const productId = updatedProduct.fullTitle;

  // Referencia al documento en la colección adecuada
  const productDoc = doc(db, productType, productId);

  // transformar para hacer legible para firebase
  const serializedProduct = updatedProduct.toFirebase();

  // Actualizar el documento en Firebase
  return await updateDoc(productDoc, serializedProduct);
};
// Funcion para administrador
// Elimina un producto de la db
export const deleteProduct = async (product: GPU | MotherBoard | Processor | PowerSource | RamMemories ) => {
    // obtener nombre de la colección
    const productType = getProductType(product);
    // y el id del producto
    const productId = product.fullTitle;

    const productDoc = doc(db, productType , productId);
    return await deleteDoc(productDoc);
};
