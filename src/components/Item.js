import './Item.css'

import image1 from '../images/image1.png'

const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    <div className='I-background'>
        <div className='I-content'>
            <div className='I-C-B1'>
                <p className='I-txt-1'>{title}</p>
            </div>
            <div className='I-C-B2'>
                <img src={image1} className="I-img-1"/>
            </div>
            <div className='I-C-B3'>
                <p className='I-txt-2'>{description}</p>
            </div>
            <div className='I-C-B4'>
                <p className='I-txt-3'>Precio: {price}</p>
            </div>
            <div className='I-C-B5'>
                <p className='I-txt-4'>ID: #{id}</p>
            </div>
        </div>
    </div>
  )
}

export default Item