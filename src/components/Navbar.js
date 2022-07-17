import './Navbar.css'

import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import products from '../products'

import 'animate.css';

const Navbar = ({}) => {

const call = products[0,1,2]

  return (
    <section className='N-background'>
        <div className='N-content'>
            <div className='N-B1'>
                <Link to={"/"} className='N-txt-1'>CryptoCat</Link>
            </div>
            <div className='N-B2'>
                <div className='N-B2B1'><Link to={`/category/${call.category}`} className='N-txt-2'>TOP COINS 😻</Link></div>
                <div className='N-B2B2'><p className='N-txt-2'>Coming soon... 😿</p></div>
                <div className='N-B2B3'><p className='N-txt-2'>Coming soon... 😿</p></div>
            </div>
            <div className='N-B3'>
                <CartWidget/>
            </div>
        </div>
    </section>
  )
}

export default Navbar
