import { FaRegEdit } from "react-icons/fa";
import { CiTrash, CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import all_product from "../Components/Assets/all_product";

export default function CartItems() {
  const { cartItems, removeFromCart, addToCart, deleteFromCartList } = useContext(ShopContext);

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
                    <CiCircleMinus onClick={() => removeFromCart(id)}/>
                  </button>
                  <p>{cartItems[itemId]}</p>
                  <button className='text-lg text-gray-400'>
                    <CiCirclePlus onClick={() => addToCart(id)}/>
                  </button>
                </div>
                <p>${new_price * cartItems[itemId]}</p>
              </div>
              <button className='text-lg text-red-400'>
                <CiTrash onClick={()=> deleteFromCartList(id)}/>
              </button>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}



