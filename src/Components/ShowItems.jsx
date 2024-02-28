import { FaSearch } from "react-icons/fa";
import { CiBarcode } from "react-icons/ci";
import { HiDotsVertical } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import Cart from "./Cart";

export default function ShowItems() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen bg-slate-200">
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="flex w-full items-center sm:h-14 md:h-16 bg-gray-50 p-4">
          <button className="text-xl font-bold text-gray-500">
            <FaSearch />
          </button>
          <input
            type="text"
            placeholder="Search Products..."
            className="border-none focus:border-none font-semi-bold ml-2 bg-gray-50 flex-grow sm:ml-2 md:ml-4"
          />
          <div className="flex flex-grow justify-end">
            <CiBarcode className="text-2xl font-bold" />
          </div>
        </div>
        <div className="flex m-6 gap-2">
          <button className="w-36 h-12 text-blue-500 border-2 border-blue-500 rounded bg-white"
            onClick={openModal}
          >
            All Categories
          </button>

          {isModalOpen && (
            <>
            <div>
            </div>
            <div className="fixed inset-y-0 right-0 w-full sm: 1/3 bg-black bg-opacity-50 flex items-start">
              <button onClick={closeModal} className="flex flex-grow justify-end">
                <IoCloseSharp className="text-3xl text-white" />
              </button>
              <div className="bg-white h-screen w-1/2">
                    <h1 className="text-center text-3xl font-semi-bold mt-3">Categories</h1>
                    <div className="flex flex-wrap m-6 gap-2">
                        <button className="w-40 h-12 sm:w-1/2 text-blue-500 font-bold border-2 border-blue-500 rounded">
                          All Categories
                        </button>

                        <button className="w-40 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Home & Lifestyle
                        </button>

                        <button className="w-32 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Men Fashion
                        </button>

                        <button className="w-32 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Electronics
                        </button>

                        <button className="w-20 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Toys
                        </button>

                        <button className="w-52 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Women Fashions
                        </button>

                        <button className="w-32 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Men Fashion
                        </button>

                        <button className="w-20 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Toys
                        </button>

                        <button className="w-40 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          All Categories
                        </button>

                        <button className="w-40 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Home & Lifestyle
                        </button>

                        <button className="w-32 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Men Fashion
                        </button>

                        <button className="w-32 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Electronics
                        </button>

                        <button className="w-40 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          All Categories
                        </button>

                        <button className="w-40 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Home & Lifestyle
                        </button>

                        <button className="w-32 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Men Fashion
                        </button>

                        <button className="w-32 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Electronics
                        </button>

                        <button className="w-20 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Toys
                        </button>

                        <button className="w-52 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Women Fashions
                        </button>

                        <button className="w-32 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Men Fashion
                        </button>

                        <button className="w-20 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Toys
                        </button>
                        <button className="w-40 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Home & Lifestyle
                        </button>
                        <button className="w-52 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Women Fashions
                        </button>
                        <button className="w-40 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          All Categories
                        </button>
                        <button className="w-20 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Toys
                        </button>
                        <button className="w-40 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Home & Lifestyle
                        </button>
                        <button className="w-32 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Electronics
                        </button>
                        <button className="w-32 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Men Fashion
                        </button>
                        <button className="w-32 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Men Fashion
                        </button>

                        <button className="w-20 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Toys
                        </button>
                        <button className="w-40 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Home & Lifestyle
                        </button>
                        <button className="w-52 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Women Fashions
                        </button>
                        <button className="w-40 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          All Categories
                        </button>
                        <button className="w-20 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Toys
                        </button>
                        <button className="w-40 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Home & Lifestyle
                        </button>
                        <button className="w-32 h-12  text-blue-500 font-bold border-2 border-blue-500 rounded">
                          Electronics
                        </button>
                    </div>
              </div>
            </div>
            </>
      )}

          <button className="w-36 h-12 text-blue-500 border-2 border-blue-500 rounded bg-white">
            Electronics
          </button>

          <button className="w-36 h-12 text-blue-500 border-2 border-blue-500 rounded bg-white">
            Home & Lifestyle
          </button>

          <button className="w-36 h-12 text-blue-500 border-2 border-blue-500 rounded bg-white">
            Men Fashion
          </button>

          <button className="w-36 h-12 text-blue-500 border-2 border-blue-500 rounded bg-white">
            Women Fashion
          </button>

          <button>
            <HiDotsVertical className="font-bold text-xl text-gray-500" />
          </button>
        </div>
        <Cart />
      </div>
    </div>
  )
}
