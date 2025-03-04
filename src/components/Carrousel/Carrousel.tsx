import React, { useState, useEffect } from 'react';
import { MotherBoard } from '../../types/motherBoard';
import { GPU } from '../../types/gpu';
import { Processor } from '../../types/processors';
import { RamMemories } from '../../types/ramMemories';


interface CarouselProps {
  products: Array< MotherBoard | GPU | Processor | RamMemories >;
}



export const Carrousel: React.FC<CarouselProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState<Array< MotherBoard | GPU | Processor | RamMemories > >([]);
  const [autoplayInterval, setAutoplayInterval] = useState<ReturnType<typeof setInterval> | null>(null);


  useEffect(() => {
    const handleResize = () => {
        // manejo del comportamiento responsivo
      const windowWidth = window.innerWidth;
      let productsToShow = 2;
      if (windowWidth < 640) {
        productsToShow = 4;
      } else if (windowWidth < 768) {
        productsToShow = 6;
      } else {
        productsToShow = 8;
      }
      setVisibleProducts(products.slice(currentIndex, currentIndex + productsToShow));
    };
    console.log(products)
    handleResize();
    window.addEventListener('resize', handleResize);

    startAutoplay();

    return () => {
      window.removeEventListener('resize', handleResize);
      stopAutoplay();
    };
  }, [products]);

  const startAutoplay = () => {
    setAutoplayInterval(
      setInterval(() => {
        handleNext();
      }, 5000)
    );
  };

  const stopAutoplay = () => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      setAutoplayInterval(null);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - visibleProducts.length : prevIndex - 1));
    stopAutoplay();
    startAutoplay();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - visibleProducts.length ? 0 : prevIndex + 1));
    stopAutoplay();
    startAutoplay();
  };

  return (
    <div className="w-full h-96 border border-red-500 relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleProducts.length)}%)` }}
        >
          {visibleProducts.map((product,i) => (
            <div key={i} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className="relative">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-gray-800 bg-opacity-75 text-white px-4 py-2">
                  <p className="font-bold">{product.title}</p>
                  <p className="font-bold">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {visibleProducts.length < products.length && (
        <div className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer" onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 hover:text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      )}
      {visibleProducts.length < products.length && (
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 hover:text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );
};


