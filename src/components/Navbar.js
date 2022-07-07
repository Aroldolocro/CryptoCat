import './Navbar.css'

import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <section className='N-background'>
        <div className='N-content'>
            <div className='N-B1'>
                <p className='N-txt-1'>CryptoCat</p>
            </div>
            <div className='N-B2'>
                <div className='N-B2B1'>
                    <p className='N-txt-2'>Comprar Crypto 😻</p>
                </div>
                <div className='N-B2B2'>
                    <p className='N-txt-2'>Vender Crypto 😿</p>
                </div>
            </div>
            <div className='N-B3'>
                <CartWidget/>
            </div>
        </div>
    </section>
  )
}

export default Navbar
