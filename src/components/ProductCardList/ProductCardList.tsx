import { ProductCard } from "../ProductCard/ProductCard"
import { LuLayoutList } from "react-icons/lu";
import { BiSolidCategory } from "react-icons/bi";
import { useEffect, useState } from "react";
import CustomSelect from "./CustomSelect";
import { MotherBoard } from "../../types/motherBoard";
import { PowerSource } from "../../types/powerSource";
import { GPU } from "../../types/gpu";
import { Spinner } from "../Spinner/Spinner";

interface Props {
    data: Array< MotherBoard | PowerSource | GPU >
}



export const ProductCardList: React.FC< Props > = ({data: initialData}) => {

    const [isAList,setListType] = useState(true);
    const [loading,setLoading] = useState(false);
    const [sortedData, setSortedData] = useState(initialData);
    
    const styles = {
        main: 'w-full',
        content: `w-full flex flex-col p-2`,
        list: `w-full max-h-[70vh] grid ${isAList ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5' : 'sm:grid-cols-2 md:grid-cols-3'} gap-2 pr-1 pb-2 overflow-auto text-gray-400 scroll`,
        header: {
            main: 'grid grid-cols-3 w-full bg-nd p-2 rounded-lg items-center  mb-2',
            typeSelector: 'text-white text-3xl rounded-lg overflow-hidden border-2 border-nd',
            listBtn: `p-2 ${isAList ? 'bg-rd text-st rounded-l-lg' : 'bg-st text-gray-400'}`,
            mosaicBtn: `p-2 ${isAList ? 'bg-st text-gray-400' : 'bg-rd text-st  rounded-r-lg'}`,
            mosaicBtnBox: 'w-full flex justify-end',
            customSelect: 'w-full col-span-2'
        }
    }

    const handleSelectChange = (value: string) => {
        let sorted = [...initialData];

        switch (value) {
            case 'high-price':
                // mayor precio
                sorted = sorted.sort((a, b) => b.price - a.price); 
                break;
            case 'low-price':
                // menor precio
                sorted = sorted.sort((a,b)=> a.price - b.price);
                break;
            case 'name-asc':
                // nombre en orden alfabético creciente
                sorted = sorted.sort((a,b)=>
                    a.title.localeCompare(b.title)
                )
                break;
            case 'name-desc':
                // nombre en orden alfabético decreciente
                sorted = sorted.sort((a,b)=>
                    b.title.localeCompare(a.title)
                )
                break;
            default:
                break;
        }

        setSortedData (sorted);
    };


    const options = [
        {
            value: '',
            label: 'Relevancia'
        },
        {
            value: 'high-price',
            label: 'Precio más alto'
        },
        {
            value: 'low-price',
            label: 'Precio más bajo'
        },
        {
            value: 'name-asc',
            label: 'Nombre, creciente'
        },
        {
            value: 'name-desc',
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
    
                <div className="w-full min-h-[70vh] flex items-center justify-center">
                    <span className="">
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

                <ul className={styles.list}>
                    {sortedData.map((product, i) => (
                        <li key={i}
                            className={' transition-all linear duration-500'}
                        >
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
