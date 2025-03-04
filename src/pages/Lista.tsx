import { useState, useEffect } from "react"
import { Spinner } from "../components/Spinner/Spinner";
import { useParams } from 'react-router-dom'
import { MotherBoard } from '../types/motherBoard';
import { PowerSource } from '../types/powerSource';
import { GPU } from '../types/gpu';
import { TarjetasMadre } from '../Database';
import { GPUs } from '../Database';
import { Fuentes } from '../Database';
import { ProductCardList } from "../components/ProductCardList/ProductCardList";

export const Lista = () => {

    const { category, brand } = useParams();
    const [loading, setLoading] = useState(true);
    const [productList, setProducts] = useState<Array<MotherBoard | PowerSource | GPU> >([])

    const FilterProductsByCategory = (): Array<MotherBoard | PowerSource | GPU> => {
        //evaluar que el parametro category exista o agregar uno en caso no exista
        const filterValue = category == undefined ? 'all' : category;
        // filtrar productos segun categoria
        switch (filterValue) {
            case 'motherboards':
                return TarjetasMadre;
                break;
            case 'powersources':
                return Fuentes;
                break;
            case 'graphicards':
                return GPUs;
                break;
            case 'all':
                return [...TarjetasMadre, ...Fuentes, ...GPUs] 
                break;

            default:
                return []
        }
    }
    
    const FilterProductsByBrand = (products:Array<MotherBoard | PowerSource | GPU> ): Array< MotherBoard | PowerSource | GPU > =>{
        //devolver arreglo completo si no existe el parametro brand
        if(!brand) return products;
        // filtrar por marca de existir el parametro
        return products.filter((product)=> product.brand.toLowerCase() === brand.toLowerCase());
        
    }
    

    useEffect(() => {
        setLoading(true);
        // filtrar por categoria y marca
        const filteredByCategory = FilterProductsByCategory();
        const filteredByBrand = FilterProductsByBrand(filteredByCategory);   
        // agregar productos
        setProducts([...filteredByBrand]);
        // mostrar en pantalla
        setTimeout(()=>setLoading(false),1000)
        /*
        NOTA:
            Al usar el backend cambiar el setTimeOut 
            por una función asincrona y asi mostrar el 
            renderizado cuando este haya cargado
            los datos requeridos
        */
    }, [category,brand])


    if (loading) {
        return (
            <div className='w-full min-h-[80vh] flex items-center justify-center'>
                <div className='scale-150'>
                    <Spinner />
                </div>
            </div>
        )
    }

    if (!loading && productList.length > 0) {
        return (
            <div className="w-full flex pt-2">
                <ProductCardList data={productList}/>
            </div>
        )
    }


}
