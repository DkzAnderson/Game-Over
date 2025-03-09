import React from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
    pageCount: number;
    onPageChange: (selectedItem: { selected: number }) => void;
    forcePage: number;
}

export const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange, forcePage }) => {
    
    const styles = {
        main: 'flex gap-2 w-full justify-center pt-2 font-roboto',
        general: 'size-10 bg-nd rounded text-white cursor-pointer',
        buttons: 'size-full flex items-center justify-center  hover:bg-rd hover:text-black rounded active:bg-th duration-500',
        active: 'border-2 border-rd font-bold duration-500',
    }
    
    
    return (
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={styles.general}
            breakLinkClassName={styles.buttons}
            pageCount={pageCount}
            marginPagesDisplayed={1}  // Número de páginas visibles al margen
            pageRangeDisplayed={1}   // Número de páginas visibles alrededor de la página actual
            onPageChange={onPageChange}
            forcePage={forcePage}
            containerClassName={styles.main}
            pageClassName={styles.general}
            pageLinkClassName={styles.buttons}
            previousClassName={styles.general}
            previousLinkClassName={styles.buttons}
            nextClassName={styles.general}
            nextLinkClassName={styles.buttons}
            activeClassName={styles.active}
            activeLinkClassName={styles.general + styles.active}
        />
    );
};
