import { useCart } from '../../contexts/CartContext'
import { IoCartOutline } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";

export const CartShop = () => {

    const { cart, removeFromCart, updateCartQuantity } = useCart();

    const ReduceQuantityProduct = (title:string,quantity:number)=>{
        const value = quantity -1
        updateCartQuantity(title, value);
    }

    const AddQuantityProduct = (title:string,quantity: number) =>{
        const value = quantity + 1
        updateCartQuantity(title, value);
    }

    const styles = {
        main: 'size-full',
        content: '',
        productList: {
            main: 'w-full min-h-96 p-2 ',
            item: 'cart-shop-item h-32 size-full bg-nd text-white',
            imageBox: 'size-full flex items-center justify-center',
            image: 'size-full object-contain',
            dataBox: 'data-box size-full ',
            headerBox: 'flex justify-between items-center',
            brand: 'text-sm text-gray-400',
            removeIcon: 'text-xl text-th',
            title: 'truncate font-bold text-lg',
            bottomBox:'w-full flex justify-between items-center',
            price: 'text-2xl font-bold text-rd',
            quantityBox: 'flex items-center',
            quantity: 'size-6 mx-1 flex items-center justify-center rounded ',
            minusBtn: 'size-7 flex items-center justify-center rounded bg-th',
            plusBtn : 'size-7 flex items-center justify-center rounded bg-th',
            trash: 'text-2xl flex items-center justify-center text-th'
        },

        emptyCartBox: {
            main: 'size-full min-h-[85vh] flex flex-col items-center justify-center text-white p-4',
            titleBox: 'flex gap-2 font-bold',
            title: 'text-2xl',
            icon: 'text-3xl',
            word:'text-2xl text-th',
            txt: 'text-center my-5 text-sm text-gray-400'
        },

        bottomBox: {
            main: '',
            subTotal: '',
            total: '',
            button: ''
        }
    }


  return (
    <section className={styles.main}>
        <div className={styles.content}>
            {cart.length < 1 ? 
                <div className={styles.emptyCartBox.main}>
                    <span className={styles.emptyCartBox.titleBox}>
                        <p className={styles.emptyCartBox.icon}>
                            <IoCartOutline/>
                        </p>
                        <h1 className={styles.emptyCartBox.title}>
                            Tu carrito está
                        </h1>
                        <h2 className={styles.emptyCartBox.word}>
                            vacío
                        </h2>
                    </span>

                    <p className={styles.emptyCartBox.txt}>
                        ¿No sabes por dónde empezar?
                        Explora nuestra tienda y descubre
                        productos increíbles que te encantarán.
                    </p>
                </div>
                :
                <ul className={styles.productList.main}>
                    {cart.map((item,i)=>(
                        <li 
                            key={i}
                            className={styles.productList.item}
                        >
                            <picture className={styles.productList.imageBox}>
                                <img 
                                    className={styles.productList.image}
                                    src={item.images[0]} 
                                    alt={`${item.title}-poster`}
                                />
                            </picture>
                            <div className={styles.productList.dataBox}>
                                <span className={styles.productList.headerBox}>
                                    <h2 className={styles.productList.brand}>
                                        {item.brand}
                                    </h2>
                                    <button
                                        onClick={()=>removeFromCart(item.title)}
                                        className={styles.productList.removeIcon}
                                    >
                                        <FaTrashCan />
                                    </button>
                                </span>
                                <h1 className={styles.productList.title}>
                                    {item.title}
                                </h1>
                                <span  className={styles.productList.bottomBox}>
                                    <h2 className={styles.productList.price}>
                                        $/{item.price.toFixed(2)}
                                    </h2>

                                    <div className={styles.productList.quantityBox}>
                                        {item.quantity != undefined && item.quantity <= 1 ?
                                        <button
                                        onClick={()=>removeFromCart(item.title)}
                                        className={styles.productList.trash}
                                    >
                                        <FaTrashCan />
                                    </button>
                                        :
                                        <button
                                        className={styles.productList.minusBtn}
                                        onClick={()=>
                                            item.quantity != undefined && ReduceQuantityProduct(item.title,item.quantity)
                                        }
                                    >
                                        <TiMinus/>
                                    </button>
                                        }


                                        <h2 className={styles.productList.quantity}>
                                            {item.quantity}
                                        </h2>

                                        <button
                                            className={styles.productList.plusBtn}
                                            onClick={()=>
                                                item.quantity != undefined && AddQuantityProduct(item.title,item.quantity)
                                            }
                                        >
                                            <FaPlus />
                                        </button>
                                    </div>
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>   
            }
        </div>
    </section>
  )
}
