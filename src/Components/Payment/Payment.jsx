import { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { BsCashCoin } from "react-icons/bs";
import { Button, TextInput } from 'flowbite-react';
import { MdOutlineCancel } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Payment() {
  const { totalCalculate } = useContext(ShopContext);
  const { total } = totalCalculate();
  const [showCardForm, setShowCardForm] = useState(false);

  const handleCardClick = () => {
    setShowCardForm(true);
  };

  return (
    <>
      <div className='flex border-2 w-11/12 border-gray-200 m-8 p-5'>
        <div className='flex flex-1'>
            <h1 className='font-bold text-xl text-gray-400'>Order Amount</h1>
        </div>
        <div className='flex'>
            <h1 className='font-bold text-xl'>${total}</h1>
        </div>
      </div>


<div className='flex flex-col md:flex-row border-2 w-11/12 border-gray-200 m-8 md:space-x-2'>
  <div className='flex flex-col gap-2 w-full md:w-2/12 md:border-r-2 border-r-0 border-b-2 border-gray-200'>
    <div className='flex items-center gap-4'>
      <BsCashCoin className='text-2xl m-4 mt-5'/>
      <p className='mb-1 text-xl text-gray-500'>Cash</p>
    </div>

    <div className='flex gap-4 items-center cursor-pointer bg-indigo-200 transition-colors duration-300' onClick={handleCardClick}>
      <BsCashCoin className='text-2xl text-indigo-500 m-4 mt-5'/>
      <p className='mb-1 text-xl text-indigo-500'>Card</p>
    </div>

    <div className='flex items-center gap-4'>
      <BsCashCoin className='text-2xl m-4 mt-5'/>
      <p className='mb-1 text-xl text-gray-500'>On Account</p>
    </div>

    <div className='flex items-center gap-4'>
      <BsCashCoin className='text-2xl m-4 mt-5'/>
      <p className='mb-1 text-xl text-gray-500'>Cheque</p>
    </div>
  </div>

  <div className='md:ml-8 mt-4 md:mt-0'>
    {showCardForm && (
      <div>
        <div className='m-6'>
          <TextInput placeholder='Card Name' className='text-lg text-gray-400'></TextInput>
          <hr className='border-1 border-gray-400'/>
        </div>
        <div className='m-6'>
          <TextInput placeholder='Card Number' className='text-lg text-gray-400'></TextInput>
          <hr className='border-1 border-gray-400'/>
        </div>
        <div className='m-6'>
          <TextInput placeholder='Card Expire Date' className='text-lg text-gray-400'></TextInput>
          <hr className='border-1 border-gray-400'/>
        </div>
        <div className='m-6'>
          <TextInput placeholder='Card Secret' className='text-lg text-gray-400'></TextInput>
          <hr className='border-1 border-gray-400'/>
        </div>

        <div className="mt-48 mb-4 ml-6 mr-6  flex flex-col md:flex-row gap-8">
          <Link to='/cart'>
            <Button className="text-red-500 font-bold text-xl h-14 w-full md:w-32 bg-red-200 rounded">
              <MdOutlineCancel className="mr-3 h-6 w-6" />
              Cancel
            </Button>
          </Link>

          <Button className="text-white font-bold text-xl h-14 w-full md:w-72 bg-blue-500 rounded">
            <FaHandHoldingDollar className="m-4 h-6 w-6" />
            Complete Payment
          </Button>
        </div>
      </div>
    )}
  </div>
</div>
     </>
  );
}


