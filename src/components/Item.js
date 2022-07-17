import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ id, title, description, price, image, category }) => {
  return (
    <div className='I-background'>
        <div className='I-content'>
            <div className='I-C-B1'>
                <p className='I-txt-1'>{title}</p>
            </div>
            <div className='I-C-B2'>
                <img src={image} className="I-img-1"/>
            </div>
            <div className='I-C-B4'>
                <p className='I-txt-3'>Precio: {price}</p>
            </div>
            <div className='I-C-B5'>
                <div className='I-C-B5B1'>
                    <p className='I-txt-4'>ID: #{id}</p>
                </div>
                <div className='I-C-B5B2'>
                    <Link key={id} to={`/item/${id}`} className='I-txt-5'>Ver detalles</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item