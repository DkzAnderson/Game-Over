
import { Link } from 'react-router-dom';
import '../../index.css'
import { useEffect, useState } from 'react';
import { Spinner } from '../Spinner/Spinner';
import { PowerSource } from '../../types/powerSource';
import { MotherBoard } from '../../types/motherBoard';
import { GPU } from '../../types/gpu';

interface Item {
    data: PowerSource | MotherBoard | GPU;
    list: boolean;
}


export const ProductCard: React.FC<Item> = ({data,list}) => {

    const [isLoading,setLoading] = useState(true);
    const [imageLoad,setImageLoad] = useState(false);

    const listStyle = {
        main: 'w-full h-36',
        content: 'size-full product-cart-1 bg-nd flex flex-col hover:shadow-[0px_0px_8px_1px] hover:scale-95 duration-300 hover:shadow-rd',
        imageBox: 'w-full h-32 bg-white overlow-hidden rounded p-1 flex items-center justify-center',
        image: 'size-full object-contain',
        dataBox: 'flex flex-col p-2 justify-between',
        titleBox: 'flex flex-col',
        brand: 'text-sm text-gray-400',
        title: 'text-white font-bold',
        price: 'text-rd text-end font-bold text-lg',
        priceAfterDiscount: '',
        offer: '',
    }

    const mosaicStyle ={
        main: 'w-full h-80',
        content: 'size-full product-card-2 relative bg-nd rounded-lg p-2',
        imageBox: 'size-full overflow-hidden rounded p-1 bg-white flex items-center justify-center',
        image: 'size-full object-contain',
        dataBox: 'flex flex-col justify-between',
        titleBox: 'flex flex-col overflow-hidden max-h-20',
        brand:'font-bold text-sm',
        title: 'max-w-full text-white text-lg font-bold',
        offer: {
            main: '',
            txt: ''
        },
        price: 'text-end text-lg font-bold text-rd',
        priceAfterDiscount: '',
        discount: '',
        
    }

    const loadingStyle = {
        list : 'w-full h-36 p-4 flex items-center justify-center',
        mosaic: 'w-full h-80 p-4 flex items-center justify-center'
    }

    useEffect(()=>{
        setLoading(false)

    },[])

    if(isLoading && list){
        return(
            <div className={loadingStyle.list}>
                <Spinner/>
            </div>
        )
    }

    if(isLoading && list == false){
        return(
            <div className={loadingStyle.mosaic}>
                <Spinner/>
            </div>
        )
    }

    if(list){
        return(
            <article className={mosaicStyle.main + ' transform transition-all duration-500 ease-in-out'}>
                <Link 
                    className={mosaicStyle.content}
                    to={``}
                >
                    <picture className={mosaicStyle.imageBox}>
                        {data.images[0] === '' ?
                            <span className='size-full flex justify-center items-center p-4'>
                                <h4 className='text-black text-lg text-center font-bold'>
                                    Imagen no disponible
                                </h4>
                            </span>
                            :
                            <div className='size-full'>
                                {!imageLoad &&
                                    <div className={`scale-75 ${data.images[0] !== '' ? 'hidden' : 'flex'}`}>
                                        <Spinner />
                                    </div>
                                }
                                {data.images[0] !== '' && 
                                
                                <img
                                    className={imageLoad ? mosaicStyle.image : 'max-h-0 max-w-0'}
                                    src={data.images[0]}
                                    alt={`${data.title}-poster`}
                                    onLoad={() => setImageLoad(true)}
                                    loading='lazy'
                                />
                                }

                            </div>
                        }




                    </picture>

                    <div className={mosaicStyle.dataBox}>
                        <span className={mosaicStyle.titleBox}>
                            <h2 className={mosaicStyle.brand}>
                                {data.brand}
                            </h2>
                            <h1 className={mosaicStyle.title}>
                                {data.title}
                            </h1>
                        </span>

                        {data.offer != undefined &&
                            data.offer == true ?
                            <span>
                                <h3 className={mosaicStyle.price}>
                                    {data.price}/$
                                </h3>
                                <h2 className={mosaicStyle.priceAfterDiscount}>
                                    {data.price}/$
                                </h2>
                            </span>
                            :
                            <h3 className={mosaicStyle.price}>
                                {data.price.toFixed(2)}/$
                            </h3>
                        }
                    </div>
                </Link>
            </article>
        )
    } else {
        return (
            <article className={listStyle.main+' transform transition-all duration-500 ease-in-out'}>
                <Link 
                    className={listStyle.content}
                    to={``}
                >
                    <picture className={listStyle.imageBox}>
                        <img 
                            className={listStyle.image}
                            src={data.images[0]} 
                            alt={`${data.title}-poster`}
                            loading="lazy" 
                        />
                    </picture>
        
                    <div className={listStyle.dataBox}>
                        <span className={listStyle.titleBox}>
                            <h3 className={listStyle.brand}>
                                {data.brand}
                            </h3>
                            <h1 className={listStyle.title}>
                                {data.title}
                            </h1>
                        </span>

        
                        <p className={listStyle.price}>
                            {data.price}/$
                        </p>
                    </div>
                </Link>
            </article>
          )
    }


}
