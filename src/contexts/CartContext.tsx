// src/contexts/CartContext.tsx
import { productProps } from '../Database';
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { toast } from 'react-toastify';


interface CartContextType {
  cart: productProps[];
  addToCart: (product: productProps) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  updateCartQuantity: (title: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<productProps[]>([]);

  const addToCart = (product: productProps) => {

    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.title === product.title);
      if (existingProduct) {
        if(product.quantity != undefined && product.quantity > 1){
          toast.success(
            `${product.title} (${product.quantity}) Añadidos al carrito`,
            {
              position: 'top-center',
              theme: 'dark'
            }
          )
        } else {
          toast.success(
            `${product.title} Añadido al carrito`,
            {
              position: 'top-center',
              theme: 'dark'
            }
          )
        }

        return prevCart.map((p) =>
          product.quantity != undefined && p.quantity != undefined &&
          p.title === product.title ? { ...p, quantity: p.quantity + product.quantity } : p
        );
      }
      if(product.quantity != undefined && product.quantity > 1){
        toast.success(
          `${product.title} (${product.quantity}) Añadidos al carrito`,
          {
            position: 'top-center',
            theme: 'dark'
          }
        )
      } else {
        toast.success(
          `${product.title} Añadido al carrito`,
          {
            position: 'top-center',
            theme: 'dark'
          }
        )
      }

      return [...prevCart, product];
    });
  };

  const removeFromCart = (title: string) => {
    setCart((prevCart) => prevCart.filter((product) => product.title !== title));
  };

  const updateCartQuantity = (title: string, quantity: number) => {
    setCart((prevCart) => {
        if (quantity <= 0) {
          return prevCart.filter((product) => product.title !== title);
        }
        return prevCart.map((product) =>
          product.title === title ? { ...product, quantity } : product
        );
      });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateCartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
