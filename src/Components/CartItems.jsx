import { FaRegEdit } from "react-icons/fa";
import { CiTrash, CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Button } from 'flowbite-react';
import { MdOutlineCancel, MdOutlineCleanHands } from "react-icons/md";
import { FaRegHandRock } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function CartItems() {
  const { all_product, cartItems, removeFromCart, addToCart, deleteFromCartList, getTotalCartAmount, getTotalCartQuantity, getTaxValue, getDiscountValue, totalCalculate } = useContext(ShopContext);
  const { total, shippingFee } = totalCalculate();
 

  return (
    <div className="flex flex-col mt-10">
      {Object.keys(cartItems).map((itemId) => {
        const id = parseInt(itemId, 10);
        const product = all_product.find((p) => p.id === id);

        if (product) {
          const { name, new_price } = product;

          return (
            <div key={id} className='flex flex-col md:flex-row md:items-center justify-center gap-4'>
              <button className='text-lg text-gray-400'>
                <FaRegEdit />
              </button>
              <div className="flex flex-col md:flex-row justify-center font-bold text-gray-400 gap-4 p-2 border-2 border-gray-300">
                <p>{name}</p>
                <p>${new_price}</p>
                <div className="flex items-center gap-2">
                  <button className='text-lg text-gray-400'>
                    <CiCircleMinus onClick={() => removeFromCart(id)} />
                  </button>
                  <p>{cartItems[itemId]}</p>
                  <button className='text-lg text-gray-400'>
                    <CiCirclePlus onClick={() => addToCart(id)} />
                  </button>
                </div>
                <p>${new_price * cartItems[itemId]}</p>
              </div>
              <button className='text-lg text-red-400'>
                <CiTrash onClick={() => deleteFromCartList(id)} />
              </button>
            </div>
          );
        }
        return null;
      })}
      <div className="flex mt-10 justify-end items-end">
        <div className="flex flex-col gap-4">
          <hr className="hidden md:block" />
          <div className="flex">
            <p className="mr-2 md:mr-20 text-gray-400">Sub Total</p>
            <p className="ml-auto font-bold">${getTotalCartAmount()}</p>
          </div>
          <hr className="hidden md:block" />
          <div className="flex">
            <p className="mr-2 md:mr-20 text-gray-400">Tax</p>
            <p className="ml-auto font-bold">${getTaxValue()}</p>
          </div>
          <hr className="hidden md:block" />
          <div className="flex">
            <p className="mr-2 md:mr-20 text-gray-400">Shipping Fee</p>
            <p className="ml-auto font-bold">${shippingFee}</p>
          </div>
          <hr className="hidden md:block" />
          <div className="flex">
            <p className="text-blue-400 font-bold">Discount on Cart</p>
            <h3 className="ml-auto font-bold">${getDiscountValue()}</h3>
          </div>
        </div>
      </div>
      <div className="ml-4 mr-1 mt-4 p-3 bg-blue-100">
        <div className="flex">
          <div className="flex-1 pl-2 md:pl-20">
            <p className="text-blue-400">Products Count({getTotalCartQuantity()})</p>
          </div>
          <div className="flex">
            <h3 className="text-xl text-blue-400 font-bold pr-2 md:pr-16">Total</h3>
            <h3 className="text-xl text-blue-400 font-bold">${total}</h3>
          </div>
        </div>
      </div>
      <div>
        <div className="ml-4 m-2 flex flex-col md:flex-row gap-4">
          <Button className="text-red-500 font-bold text-xl h-14 w-32 md:w-40 bg-red-200 rounded">
            <MdOutlineCancel className="mr-3 h-6 w-6" />
            Cancel
          </Button>

          <Button className="text-indigo-500 font-bold text-xl h-14 w-28 md:w-32 bg-indigo-200 rounded">
            <FaRegHandRock className="mr-3 h-5 w-5" />
            Hold
          </Button>

          <Button className="text-indigo-500 font-bold text-xl h-14 w-40 md:w-48 bg-indigo-200 rounded">
            <MdOutlineCleanHands className="mr-3 h-6 w-6" />
            Discount
          </Button>

          <Link to='/payment'>
            <Button
                className="text-blue-500 font-bold text-xl h-14 w-40 md:w-48 bg-blue-200 rounded"
                
              >
                <MdOutlineCleanHands className="mr-3 h-6 w-6" />
                Pay Now
              </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
