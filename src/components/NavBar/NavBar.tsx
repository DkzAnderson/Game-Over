import { IoMenuOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import React, { useState, useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import lightLogo from '../../assets/Logo.gif'
import { FaUserCircle } from "react-icons/fa";
import { CartShop } from "../CartShop/CartShop";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

interface categoryValue {
    name: string;
    url: string;
}

interface category {
    name: string;
    url: string;
    values: categoryValue[];
}

interface categoryProps {
    data: category;
    closeMenu: Function;
    menuState: boolean;
}

const CategoryList: React.FC<categoryProps> = ({ data, closeMenu, menuState }) => {
    const [isOpen, setOpen] = useState(false);
    const listRef = useRef<HTMLUListElement>(null);


    useEffect(()=>{
        // cierra los sub menus cuando cambia el estado del mismo
        if(!menuState){
            setOpen(false);
        }
    },[menuState])

    const styles = {
        main: "w-full flex flex-col",
        list: "grid grid-cols-[88%_12%] h-20 items-center",
        txts: "text-lg text-white text-start ml-4",
        arrow: `text-rd text-3xl ${isOpen ? "-rotate-90 mb-4" : "rotate-90 mt-4"} duration-500`,
        dropdown: `flex flex-col gap-2 overflow-hidden transition-[max-height] duration-500 ease-in-out`,
    };

    if(data.values.length > 0){
        return (
            <div className={styles.main}>
                <button
                    className={styles.list}
                    onClick={() => setOpen(!isOpen)}
                    aria-expanded={isOpen}
                >
                    <h4 className={styles.txts}>{data.name}</h4>
    
                    {data.values.length > 0 && (
                        <span className={styles.arrow}>
                            <IoIosArrowForward />
                        </span>
                    )}
                </button>
    
                <ul
                    ref={listRef}
                    className={styles.dropdown}
                    style={{
                        maxHeight: isOpen
                            ? `${listRef.current?.scrollHeight}px` // Altura dinámica cuando está abierto
                            : "0px", // Cerrado
                    }}
                >
                    {data.values.map((value, i) => (
                        <li key={i}>
                            <Link 
                                className="flex w-full pl-2 h-10 items-center border-l-4 border-rd"
                                to={value.url}
                                onClick={()=>{
                                    closeMenu(false)
                                    setOpen(false)
                                }}
                            >
                                <h4 className={styles.txts}>{value.name}</h4>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    } else {
        return (
            <div className={styles.main}>
                <Link
                    to={data.url}
                    className={styles.list}
                    onClick={()=>closeMenu(false)}
                >
                    <h4 className={styles.txts}>{data.name}</h4>
    
                    {data.values.length > 0 && (
                        <span className={styles.arrow}>
                            <IoIosArrowForward />
                        </span>
                    )}
                </Link>
            </div>
        );
    }


};

export const NavBar = () => {

    const [menuIsOpen, setMenuState] = useState(false);
    const [cartIsOpen, setCartState] = useState(false);
    const [searchIsOpen, setSearchState] = useState(false);


    const styles = {
        main: `fixed z-50 w-full top-0 h-[10vh] bg-black shadow-[0px_0px_8px_2px] shadow-[#0cf7d8]`,
        content: {
            main: 'flex size-full items-center justify-between p-2',
            menuBtn: `flex items-center justify-center w-12 text-5xl text-rd`,
            logoBox: 'h-full',
            logo: 'size-full object-contain',
            rightBox: 'flex gap-2',
            searchBtn: `text-3xl text-rd`,
            cartBtn: `text-3xl text-rd `
        },

        menuBox: {
            main: `absolute w-full min-h-screen top-0 left-0 ${menuIsOpen ? 'translate-x-[0%]' : 'translate-x-[-100%]'} duration-300 bg-black`,
            header: {
                main: `fixed top-0 left-0 w-full bg-nd h-[10vh] flex justify-between p-2 shadow-[-2px_0px_3px_0px] shadow-rd text-white`,
                leftSideBox: 'flex items-center gap-4',
                userImageBox: 'flex items-center justify-center text-5xl text-rd rounded-full size-14',
                userImage: 'size-full object-contain',
                txtBox: 'flex flex-col',
                userName: 'font-bold',
                profileLink: 'text-sm underline',
                closeBtn: 'flex justify-center items-center text-5xl text-rd'
            },
            content: {
                main: 'flex flex-col w-full pt-20 min-h-screen',
                header: 'w-full pl-4 flex flex-col border-b border-rd',
                list: 'flex flex-col max-h-[60vh] border-b border-rd overflow-auto',
                items: 'grid grid-cols-[12%_76%_12%] h-16 items-center',
                txts: 'text-lg text-white h-20 flex items-center',
            }
        },

        searchBox: {
            main: `absolute w-full min-h-screen top-0 left-0 ${searchIsOpen ? 'translate-x-[0%]' : 'translate-x-[100%]'} bg-black/75 duration-500`
        },

        cartBox: {
            main:`absolute flex justify-end w-full min-h-screen top-0 left-0 ${cartIsOpen ? 'translate-x-[0%]' : 'translate-x-[100%]'} bg-nd/80 duration-300`,
            content: `w-[80%] min-h-screen flex flex-col bg-black border-l-2 border-rd `,
            header: 'w-full h-[10vh] bg-nd flex items-center justify-between p-2 border-b border-rd',
            headerTitle: 'text-lg text-white font-bold',
            headerBtn: 'text-5xl text-rd'

        }


    }
  
    // variable que contiene las categorías del menu
    // y sus url/opciones
    const categories: category[] = [
        {
            name: 'Tarjetas madre',
            url: '/products/motherboards',
            values: [
                {
                    name: 'Todas las marcas',
                    url: '/products/motherboards'
                },
                {
                    name: 'ASUS',
                    url: '/products/motherboards/asus'
                },
                {
                    name: 'Gigabyte',
                    url: '/products/motherboards/gigabyte'
                },
                {
                    name: 'MSI',
                    url:'/products/motherboards/msi'
                },
                {
                    name: 'Asrock',
                    url: '/products/motherboards/asrock'
                },


            ]
        },
        {
            name: 'Fuentes de poder',
            url: '/products/powersources',
            values: [
                {
                    name: 'Todas las marcas',
                    url: '/products/powersources'
                },
                {
                    name: 'EVGA',
                    url: '/products/powersources/evga'
                }
            ]
        },
        {
            name: 'Tarjetas gráficas',
            url: '/products/graphiccards',
            values: [
                {
                    name: 'Todas las marcas',
                    url:'/products/graphicards'
                },
                {
                    name: 'AsRock',
                    url:'/products/graphicards/asrock'
                },
                {
                    name: 'ASUS',
                    url:'/products/graphicards/asus'
                },
                {
                    name: 'Intel',
                    url:'/products/graphicards/intel'
                },
                {
                    name: 'Sapphire',
                    url:'/products/graphicards/sapphire'
                },
            ]
        }

    ]
  
    return (
    <section className={styles.main}>
        {/* Header Mobile */}
        <div className={styles.content.main}>
            <button 
                className={styles.content.menuBtn}
                onClick={()=>setMenuState(true)}
            >
                <IoMenuOutline />
            </button>

            <span className={styles.content.logoBox}>
                <img 
                    className={styles.content.logo}
                    src={lightLogo} 
                    alt="logo" 
                />
            </span>

            <div className={styles.content.rightBox}>
                <button 
                    className={styles.content.searchBtn}
                    onClick={()=>setSearchState(true)}
                >
                    <FiSearch />
                </button>

                <button 
                    className={styles.content.cartBtn}
                    onClick={()=>setCartState(true)}
                >
                    <IoCartOutline />
                </button>
            </div>
        </div>

        {/* Menu desplazable */}
            <div className={styles.menuBox.main}>
                <div className="relative">
                    {/* header */}
                    <div className={styles.menuBox.header.main}>
                        <div className={styles.menuBox.header.leftSideBox}>
                            <span className={styles.menuBox.header.userImageBox}>
                                <FaUserCircle />
                            </span>

                            <div className={styles.menuBox.header.txtBox}>
                                <h1 className={styles.menuBox.header.userName}>
                                    Nombre de usuario
                                </h1>

                                <h2 className={styles.menuBox.header.profileLink}>
                                    Mi perfil
                                </h2>
                            </div>
                        </div>

                        <button
                            className={styles.menuBox.header.closeBtn}
                            onClick={() => setMenuState(false)}
                        >
                            <IoClose />
                        </button>
                    </div>
                    {/* contenido */}
                    <div className={styles.menuBox.content.main}>
                        {/* mis compras */}
                        <span className={styles.menuBox.content.header}>
                            <Link 
                                className={styles.menuBox.content.txts}
                                to={'/home'}
                                onClick={()=>{setMenuState(false)}}
                            >
                                Inicio
                            </Link>
                            <Link 
                                className={styles.menuBox.content.txts}
                                to={'/account/orders'}
                                onClick={()=>{setMenuState(false)}}
                            >
                                Mis compras
                            </Link>
                        </span>
                        {/* categorías */}
                        <ul className={styles.menuBox.content.list}>
                            {categories.map((category: category,i)=>(
                                    <li 
                                        key={i}
                                        className="flex flex-col"
                                    >
                                            <CategoryList 
                                                data={category}
                                                closeMenu={setMenuState}
                                                menuState={menuIsOpen}
                                            />
                                    </li>
                                ))}
                        </ul>
                    </div>

                </div>
            </div>

        {/* Carrito de compra */}
            <div className={styles.cartBox.main}>
                <div className={styles.cartBox.content}>
                    <div className={styles.cartBox.header}>
                        <h1 className={styles.cartBox.headerTitle}>
                            Tu carrito
                        </h1>

                        <button
                            className={styles.cartBox.headerBtn}
                            onClick={() => setCartState(false)}
                        >
                            <IoClose />
                        </button>
                    </div>
                    <CartShop/>
                </div>
            </div>

        {/* Busqueda */}
        <div className={styles.searchBox.main}>

        </div>
    </section>
  )
}
