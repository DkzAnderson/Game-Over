import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { MotherBoard } from '../types/motherBoard';
import { PowerSource } from '../types/powerSource';
import { GPU } from '../types/gpu';
import { ProductCardList } from "../components/ProductCardList/ProductCardList";
import { fetchOrderProps, getProducts, getProductsCount } from "../services/productService";
import { Pagination } from "../components/ProductCardList/Pagination";
import { toast } from 'react-toastify';

export const Lista = () => {
    const { category, brand, page } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [productList, setProducts] = useState<Array<MotherBoard | PowerSource | GPU>>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrderType] = useState<fetchOrderProps>({ type: 'title', order: 'asc' });
    const [lastDocs, setLastDocs] = useState<any[]>([]); // Array para almacenar los últimos documentos de cada página
    const [totalProducts, setTotalProducts] = useState(0);
    const productsPerPage = 10;

    useEffect(() => {
        setLoading(true);

        const FetchData = async () => {
            try {
                const currentPageNumber = page === undefined ? 1 : parseInt(page);
                setCurrentPage(currentPageNumber);

                let startAfterDoc = null;
                if (currentPageNumber > 1 && lastDocs.length >= currentPageNumber - 1) {
                    startAfterDoc = lastDocs[currentPageNumber - 2];
                }

                if (category !== undefined) {
                    const data = await getProducts(category, order, productsPerPage, startAfterDoc, brand);
                    // Actualizar el array de lastDocs
                    if (lastDocs.length < currentPageNumber) {
                        setLastDocs([...lastDocs, data.lastDoc]);
                    }
                    setProducts(data.products);
                    setLoading(false);

                    // Obtener el total de productos en la colección
                    const count = await getProductsCount(category, brand);
                    setTotalProducts(count);
                }
            } catch (error) {
                toast.error('Error fetching products');
                setLoading(false);
            }
        };

        FetchData();
    }, [category, brand, page, order]);

    const handlePageChange = (selectedItem: { selected: number }) => {
        const newPage = selectedItem.selected + 1;
        setCurrentPage(newPage);
        if(brand){
            navigate(`/products/${category}/${brand}/${newPage}`);
        } else {
            navigate(`/products/${category}/${newPage}`);
        }
    };

    if (productList.length > 0) {
        return (
            <div className="w-full grid grid-rows-[90%_10%] gap-y-4 h-full border">
                <ProductCardList
                    data={productList}
                    setOrderType={setOrderType}
                    currentOrder={order}
                    loading={loading}
                    setLoading={setLoading}
                />
                <Pagination
                    pageCount={Math.ceil(totalProducts / productsPerPage)}
                    onPageChange={handlePageChange}
                    forcePage={currentPage - 1} // Indica la página actual
                />
            </div>
        );
    }

    return (
        <div className='w-full min-h-[80vh] flex items-center justify-center'>
            <p>No products found.</p>
        </div>
    );
};
