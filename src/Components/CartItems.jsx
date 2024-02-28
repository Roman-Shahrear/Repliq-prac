import { FaRegEdit } from "react-icons/fa";
import { CiTrash, CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Sidebar, Button } from "flowbite-react";
import {
  MdOutlineCancel,
  MdOutlineCleanHands,
  MdOutlineLocationOn,
  MdOutlineLocalShipping,
} from "react-icons/md";
import { TbLayoutDashboard, TbFileDollar } from "react-icons/tb";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { FaRegHandRock } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import {
  IoSettingsOutline,
  IoCloseSharp,
  IoMenuOutline,
} from "react-icons/io5";
import { SlNote } from "react-icons/sl";
import { FaPlus } from "react-icons/fa6";
import { GrStakeholder } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CartItems() {
  const {
    all_product,
    cartItems,
    removeFromCart,
    addToCart,
    deleteFromCartList,
    getTotalCartAmount,
    getTotalCartQuantity,
    getTaxValue,
    getDiscountValue,
    totalCalculate,
  } = useContext(ShopContext);
  const { total, shippingFee } = totalCalculate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleSettingsModal = () => {
    setIsSettingsModalOpen(true);
  };

  const closeSettingsModal = () => {
    setIsSettingsModalOpen(false);
  };

  const openAddItemModal = () => {
    setIsAddItemModalOpen(true);
  };

  const closeAddItemModal = () => {
    setIsAddItemModalOpen(false);
  };
  return (
    <>
      <div className="mt-4 ml-4">
        <div className="flex flex-col sm:flex-row md:flex-row gap-1">
          <button onClick={toggleSidebar}>
            <IoMenuOutline className="text-3xl text-gray-600 font-bold w-8" />
          </button>
          {isSidebarOpen && (
            <>
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-start">
                <Sidebar className="bg-white w-80 h-full">
                  <div className="bg-gray-100 w-80 pb-4">
                    <div className="flex justify-end">
                      <button onClick={closeSidebar}>
                        <IoCloseSharp className="text-3xl font-bold text-black" />
                      </button>
                    </div>
                    <h1 className="font-bold text-4xl ml-14 text-black">
                      go
                      <span className="text-lime-400">B</span>illing
                    </h1>
                    <p className="mt-10 text-sm pl-4 text-gray-400">
                      Location:
                    </p>
                    <h6 className="text-xl pl-4">Los Angeles, California</h6>
                  </div>

                  <Sidebar.Items className="">
                    <Sidebar.ItemGroup>
                      <Sidebar.Item className="text-gray-500" href="#">
                        <div className="flex items-center font-semi-bold text-xl gap-2">
                          <TbLayoutDashboard className="mt-1" />
                          <span>Dashboard</span>
                        </div>
                      </Sidebar.Item>

                      <Sidebar.Item
                        className="bg-indigo-200 hover:text-indigo-500 "
                        href="#"
                      >
                        <div className="flex items-center  font-semi-bold text-xl text-indigo-500 gap-4">
                          <MdOutlineLocationOn className="mt-1 text-2xl" />
                          <span>Location</span>
                        </div>
                      </Sidebar.Item>

                      <Sidebar.Item className="text-gray-500" href="#">
                        <div className="flex items-center  font-semi-bold text-xl gap-4">
                          <TbFileDollar className="mt-1" />
                          <span>POS Invoices</span>
                        </div>
                      </Sidebar.Item>

                      <Sidebar.Item className="text-gray-500" href="#">
                        <div className="flex items-center font-semi-bold text-xl gap-4">
                          <IoSettingsOutline className="mt-1" />
                          <p onClick={toggleSettingsModal}>Settings</p>
                        </div>
                      </Sidebar.Item>
                    </Sidebar.ItemGroup>
                  </Sidebar.Items>
                </Sidebar>

                {isSettingsModalOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded sm:w-1/2 lg:w-96">
                      <div className="w-full h-76">
                        <div className="flex justify-between items-center font-bold">
                          <button onClick={closeSettingsModal}>
                            <HiOutlineChevronLeft className="text-2xl" />
                          </button>
                          <p className="flex-grow text-center text-2xl">
                            Settings
                          </p>
                        </div>
                        <div className="flex mt-8">
                          <div className="w-full sm:w-1/2 h-14 bg-blue-100 p-4 border-b-4 border-blue-500">
                            <h1 className="text-xl">Tax On</h1>
                          </div>
                          <div className="w-full sm:w-1/2 h-14 bg-gray-100 p-4 border-b-4 border-gray-500">
                            <h1 className="text-xl">Tax-Type</h1>
                          </div>
                        </div>
                        <form className="mt-10">
                          <div className="flex gap-6 items-center">
                            <input type="radio" id="" name="" value="" />
                            <label className="text-xl">After Discount</label>
                          </div>
                          <br />
                          <div className="flex gap-6 items-center">
                            <input type="radio" id="" name="" value="" />
                            <label className="text-xl">After Discount</label>
                          </div>
                        </form>
                        <button className="w-full sm:w-72 h-12 bg-blue-500 text-white rounded ml-3 mt-8">
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          <div className="flex items-center w-full sm:w-24 ml-4 p-2 bg-indigo-100 gap-2 rounded text-indigo-500 font-bold">
            <SlNote className="ml-2" />
            <p>Note</p>
          </div>

          <div className="flex items-center w-full sm:w-40 ml-4 p-2 bg-indigo-100 gap-4 rounded text-indigo-500 font-bold">
            <MdOutlineLocalShipping className="ml-2 text-xl" />
            <p>Shipping</p>
          </div>

          <div className="flex items-center w-full sm:w-44 ml-4 p-2 bg-indigo-100 gap-4 rounded text-indigo-500 font-bold">
            <GrStakeholder className="ml-4 text-xl" />
            <p>Hold Order</p>
          </div>

          <div className="flex items-center w-full sm:w-44 ml-4 p-2 bg-indigo-100 gap-4 rounded text-indigo-500 font-bold">
            <FaCirclePlus className="ml-4 text-xl" />
            <p>New Item</p>
          </div>
        </div>
      </div>
      <div className="flex m-4 items-center bg-indigo-200 rounded">
        <div className="flex text-indigo-600">
          <CgProfile className="text-xl font-bold m-4 mt-5" />
          <h3 className="mt-4 font-semi-bold">Steve Jobs</h3>
        </div>
        <div className="flex flex-grow justify-end">
          <HiOutlinePlusCircle
            className="ml-auto mr-4 text-xl text-indigo-600 font-bold"
            onClick={openAddItemModal}
          />
        </div>
      </div>

      {isAddItemModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded sm:1/2 lg:w-96">
            <div className="w-full sm:w-84 h-76">
              <div className="flex justify-between items-center">
                <button onClick={closeAddItemModal}>
                  <HiOutlineChevronLeft className="text-2xl" />
                </button>
                <p className="flex-grow text-center text-2xl">
                  Add New Customer
                </p>
              </div>
              <form>
                <div className="flex flex-col mt-8">
                  <div className="">
                    <input
                      placeholder="Name"
                      type="text"
                      className="w-full sm:w-80 border-none focus:outline-none"
                    />
                    <hr className="border-1 border-gray-400 ml-3" />
                    <input
                      placeholder="Email"
                      type="email"
                      className="w-full sm:w-80 mt-1 border-none focus:outline-none"
                    />
                    <hr className="border-1 border-gray-400 ml-3" />
                    <input
                      placeholder="Phone"
                      type="text"
                      className="w-full sm:w-80 mt-1 border-none focus:outline-none"
                    />
                    <hr className="border-1 border-gray-400 ml-3" />

                    <div className="relative w-full sm:w-80">
                      <input
                        type="text"
                        placeholder="Currency"
                        className="w-full mt-1 border-none focus:outline-none"
                        readOnly
                      />
                      <hr className="border-1 border-gray-400 ml-3" />
                      <select
                        className="absolute inset-0 opacity-0 cursor-pointer w-full"
                        onChange={(e) => e.target.value}
                      >
                        <option value="" disabled>
                          Select Currency
                        </option>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                        <option value="gbp">BDT</option>
                      </select>
                    </div>
                    <input
                      placeholder="TAX ID"
                      type="text"
                      className="w-full sm:w-80 mt-1 border-none focus:outline-none"
                    />
                    <hr className="border-1 border-gray-400 ml-3" />
                    <button className="flex items-center mt-6 ml-2 gap-6">
                      <FaPlus className="text-xs text-blue-500 font-bold" />
                      <p className="text-sm text-blue-500 font-bold">
                        Add More Deails
                      </p>
                    </button>
                  </div>
                </div>
                <button className="w-full sm:w-80 h-12 bg-blue-500 text-white rounded mt-6">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/*......................................................... */}
      <div className="flex flex-col mt-4">
        {Object.keys(cartItems).map((itemId) => {
          const id = parseInt(itemId, 10);
          const product = all_product.find((p) => p.id === id);

          if (product) {
            const { name, new_price } = product;

            return (
              <div
                key={id}
                className="flex flex-col w-full md:flex-row md:items-center gap-4 ml-4"
              >
                <button className="text-lg text-gray-400">
                  <FaRegEdit />
                </button>
                <div className="flex flex-col md:flex-row  justify-center font-bold text-gray-400 gap-4 p-2 border-2 border-gray-300">
                  <p>{name}</p>
                  <p>${new_price}</p>
                  <div className="flex items-center gap-2">
                    <button className="text-lg text-gray-400">
                      <CiCircleMinus onClick={() => removeFromCart(id)} />
                    </button>
                    <p>{cartItems[itemId]}</p>
                    <button className="text-lg text-gray-400">
                      <CiCirclePlus onClick={() => addToCart(id)} />
                    </button>
                  </div>
                  <p>${new_price * cartItems[itemId]}</p>
                </div>
                <button className="text-lg text-red-400">
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
              <p className="text-blue-400">
                Products Count({getTotalCartQuantity()})
              </p>
            </div>
            <div className="flex">
              <h3 className="text-xl text-blue-400 font-bold pr-2 md:pr-16">
                Total
              </h3>
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

            <Link to="/payment">
              <Button className="text-blue-500 font-bold text-xl h-14 w-40 md:w-48 bg-blue-200 rounded">
                <MdOutlineCleanHands className="mr-3 h-6 w-6" />
                Pay Now
              </Button>
            </Link>
          </div>
        </div>
  </div>  
    </>
  );
}
