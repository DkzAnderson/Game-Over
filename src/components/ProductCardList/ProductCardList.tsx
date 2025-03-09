import { ProductCard } from "../ProductCard/ProductCard"
import { LuLayoutList } from "react-icons/lu";
import { BiSolidCategory } from "react-icons/bi";
import { useEffect, useState } from "react";
import CustomSelect from "./CustomSelect";
import { MotherBoard } from "../../types/motherBoard";
import { PowerSource } from "../../types/powerSource";
import { GPU } from "../../types/gpu";
import { Spinner } from "../Spinner/Spinner";
import { fetchOrderProps } from "../../services/productService";

interface Props {
    data: Array< MotherBoard | PowerSource | GPU >
    setOrderType: Function;
    currentOrder: fetchOrderProps;
    loading: boolean;
    setLoading: Function;

}

interface optionsProps {
    value: fetchOrderProps;
    label: string;
}


export const ProductCardList: React.FC< Props > = ({
    data,setOrderType,
    loading, setLoading
}) => {

    const [isAList,setListType] = useState(true);

    const styles = {
        main: 'w-full h-full flex',
        content: `w-full flex flex-col p-2`,
        list: `w-full h-full grid ${isAList ? ' grid-cols-2 sm:grid-cols-3 md:grid-cols-5' : 'items-start sm:grid-cols-2 md:grid-cols-3'} gap-2 pr-1 pb-2 overflow-auto scroll`,
        header: {
            main: 'h-16 grid grid-cols-3 w-full bg-nd p-2 rounded-lg items-center  mb-2',
            typeSelector: 'text-white text-xl rounded-lg overflow-hidden border-2 border-nd',
            listBtn: `p-2 ${isAList ? 'bg-rd text-st rounded-l-lg' : 'bg-st text-gray-400'}`,
            mosaicBtn: `p-2 ${isAList ? 'bg-st text-gray-400' : 'bg-rd text-st  rounded-r-lg'}`,
            mosaicBtnBox: 'w-full flex justify-end',
            customSelect: 'w-full col-span-2'
        }
    }

    const handleSelectChange = (value: fetchOrderProps) => {
        setOrderType(value);
    };


    const options: optionsProps[] = [
        {
            value: {type: 'price', order: 'desc'},
            label: 'Precio más alto'
        },
        {
            value: {type: 'price', order: 'asc'},
            label: 'Precio más bajo'
        },
        {
            value: {type: 'title', order: 'asc'},
            label: 'Nombre, creciente'
        },
        {
            value: {type: 'title', order: 'desc'},
            label: 'Nombre, decreciente'
        }
    ]

    useEffect(()=>{
        setTimeout(()=>setLoading(false),1000)
    },[])

    if(loading){
        return(
            <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.header.main}>
                    <div className={styles.header.customSelect}>
                        <CustomSelect 
                            options={options}
                            onChange={handleSelectChange}
                        />
                    </div>
    
                      <div className={styles.header.mosaicBtnBox}>
                          <span className={styles.header.typeSelector}>
                              <button
                                  className={styles.header.listBtn}
                                  onClick={() => setListType(true)}
                              >
                                  <LuLayoutList />
                              </button>
                              <button
                                  className={styles.header.mosaicBtn}
                                  onClick={() => setListType(false)}
                              >
                                  <BiSolidCategory />
                              </button>
                          </span>
                      </div>
    
    
                </div>
    
                <div className="w-full min-h-[68vh] flex items-center justify-center">
                    <span className="scale-110">
                        <Spinner/>
                    </span>

                </div>
            </div>
        </div>
        )
    }

    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.header.main}>
                    <div className={styles.header.customSelect}>
                        <CustomSelect
                            options={options}
                            onChange={handleSelectChange}
                        />
                    </div>

                    <div className={styles.header.mosaicBtnBox}>
                        <span className={styles.header.typeSelector}>
                            <button
                                className={styles.header.listBtn}
                                onClick={() => setListType(true)}
                            >
                                <BiSolidCategory />
                            </button>
                            <button
                                className={styles.header.mosaicBtn}
                                onClick={() => setListType(false)}
                            >
                                <LuLayoutList />
                            </button>
                        </span>
                    </div>


                </div>

                <ul 
                    className={styles.list}
                    style={{ gridAutoRows: 'max-content' }}
                >
                    {data.map((product, i) => (
                        <li key={i}>
                            <ProductCard
                                data={product}
                                list={isAList}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
