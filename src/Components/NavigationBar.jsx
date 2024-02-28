import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <nav>
        <div className='bg-gray-100'>
            <Link to="/cart" className='text-xl font-bold ml-4'>Click here to see for Cart page</Link>
            <Link to="/payment" className='text-xl font-bold ml-8'> Click here to see for Payment page</Link>
        </div>
    </nav>
  )
}
