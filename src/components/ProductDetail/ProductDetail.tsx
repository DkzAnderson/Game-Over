import { useEffect, useState } from "react"
import { productProps } from "../../types/product"
import { useCart } from "../../contexts/CartContext"
import { db } from "../../Database"

export const ProductDetail = () => {
    
    const [product, setProduct] = useState<productProps | undefined>(undefined)
    const [quantityCount,setQuantity] = useState<number>(1);
    const { addToCart } = useCart();

    const AddQuantity = ()=>{
        if(product?.quantity != undefined){
            const value = product?.quantity + 1;
            setQuantity(value)
            product.quantity = value;
        }
    }

    const RemoveQuantity = ()=>{
        if(product?.quantity != undefined){
            const value = product?.quantity - 1;
            setQuantity(value)
            product.quantity = value;
        }
    }

    const AddToCart = ()=>{
        if(product != undefined){
            addToCart(product)
        }
    }

    const styles = {
        main: 'w-full p-2',
        content: 'size-full flex flex-col bg-nd rounded-lg p-2',
        headerBox: 'flex gap-2 text-sm text-gray-400',
        headerTxt: 'underline font-bold',
        titleBox: 'flex flex-col',
        title: 'text-2xl text-white font-bold',
        brand: 'text-gray-400 font-bold',
        sliderBox: 'my-4',
        dataBox: '',

        cartBox: 'flex flex-col ',
        quantityBox: {
            main: 'flex items-center my-4',

            priceBox: 'w-full flex items-end text-rd',
            price: 'font-bold text-5xl ',


            lessBtn: 'size-10 flex items-center justify-center bg-st text-2xl text-gray-400 rounded',
            quantity: 'size-10 flex items-center justify-center font-bold text-gray-400',
            plusBtn: 'size-10 flex items-center justify-center bg-rd text-2xl text-black rounded'
        },
        cartBtns: {
            main: 'flex flex-col gap-2 font-bold',
            add: 'w-full bg-rd rounded h-[45px] text-xl',
            buyNow: 'w-full bg-st rounded h-[45px] text-xl text-white'
        },

        details: {
            main: 'flex flex-col gap-2 my-4',
            item: 'w-full',
            txt: 'text-gray-400'
        }
    }

    useEffect(()=>{
        setProduct(db[4])
    },[])


    return (
    <section className={styles.main}>
        {product != undefined &&
            <div className={styles.content}>
                <span className={styles.headerBox}>
                    <h2 className={styles.headerTxt}>
                        {product.category}
                    </h2>
                    <h2>
                        /
                    </h2>
                    <h2 className={styles.headerTxt}>
                        {product.brand}
                    </h2>
                </span>
                <span className={styles.titleBox}>
                    <h3 className={styles.brand}>
                        {product.brand}
                    </h3>
                    <h1 className={styles.title}>
                        {product.fullTitle}
                    </h1>
                </span>
                   {/* Slider de imagenes */} 
                <div className={styles.sliderBox}>
                    <picture className="size-full flex items-center justify-center">
                        <img
                            className="size-full object-contain" 
                            src={product.images[0]} 
                            alt="" 
                        />
                    </picture>
                </div>

                    <div className={styles.dataBox}>
                        {/* Agregar al carrito */}
                        <div className={styles.cartBox}>
                            {/* Cantidad del producto */}
                            <div className={styles.quantityBox.main}>
                                <span className={styles.quantityBox.priceBox}>
                                    <h5 className="text-lg">
                                        $/
                                    </h5>
                                    <h2 className={styles.quantityBox.price}>
                                        {product.price.toFixed(2)}
                                    </h2>
                                </span>
                                <span className={styles.quantityBox.main}>
                                    <button 
                                        className={styles.quantityBox.lessBtn}
                                        onClick={RemoveQuantity}
                                    >
                                        -
                                    </button>
                                    <h2 className={styles.quantityBox.quantity}>
                                        {quantityCount}
                                    </h2>
                                    <button className={styles.quantityBox.plusBtn}
                                        onClick={AddQuantity}
                                    >
                                        +
                                    </button>
                                </span>
                            </div>
                            {/* Botones para añadir / comprar */}
                            <span className={styles.cartBtns.main}>
                                <button 
                                    className={styles.cartBtns.add}
                                    onClick={AddToCart}
                                >
                                    Añadir al carro
                                </button>

                                <button className={styles.cartBtns.buyNow}>
                                    Comprar ahora
                                </button>
                            </span>
                        </div>
                        {/* Características */}
                        <ul className={styles.details.main}>
                            {product.description.map((data, i) => (
                                <li
                                    key={i}
                                    className={styles.details.item}
                                >
                                    <h2 className={styles.details.txt}>
                                        {data}
                                    </h2>

                                </li>
                            ))}
                        </ul>

                    </div>
            </div>
        }
    </section>
  )
}
