import { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product";


export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItem((prev) => {
        const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
        return updatedCart;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItem((prev) => {
        const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
        return updatedCart;
        });
    };

    const getTotalCartQuantity = () => {
        let totalQuantity = 0;
    
        for (const item in cartItems) {
        if (cartItems[item] > 0) {
            totalQuantity += cartItems[item];
        }
        }
    
        return totalQuantity;
    };
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo = all_product.find(
            (product) => product.id === Number(item)
            );
            totalAmount += itemInfo.new_price * cartItems[item];
        }
        }
        return totalAmount;
    };


    const deleteFromCartList = (itemId) => {
        setCartItem((prev) => {
        const updatedCart = { ...prev };
        delete updatedCart[itemId];
        return updatedCart;
        });
    };


    const getTaxValue = () => {
      return 0.25 * getTotalCartAmount();
    };
  
    const getShippingFeeValue = () => {
      const hasItemsInCart = getTotalCartQuantity() > 0;
      return hasItemsInCart ? 20 : 0;
    };
  
    const getDiscountValue = () => {
      return 0.08 * getTotalCartAmount();
    };


    const totalCalculate = () => {
      const subtotal = getTotalCartAmount();
      const tax = 0.25 * subtotal;
      const shippingFee = getShippingFeeValue();
      const discount = 0.08 * subtotal;
  
      const total = subtotal + tax + shippingFee - discount;
  
      return {
        subtotal,
        tax,
        shippingFee,
        discount,
        total,
      };
    };

    useEffect(() => {}, [cartItems]);

    const contextValue = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartQuantity,
        deleteFromCartList,
        getTaxValue,
        getShippingFeeValue,
        getDiscountValue,
        totalCalculate,

    };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;