import './ItemDetail.css'

const ItemDetail = ({ items }) => {
  return (
    <div className='ID-background'>
              {items.map(( {title, image, description, price, walletsender, network, id}) => (
                  <div className='ID-container'>
                    <div className='ID-C-B1'><p className='ID-txt-1'>{title}</p></div>
                    <div className='ID-C-B2'><img src={image} className="ID-img-1"/></div>
                    <div className='ID-C-B3'><p className='ID-txt-2'><p className='ID-txt-3'>Product Description:</p>{description}</p></div>
                    <div className='ID-C-B4'><p className='ID-txt-4'>{price}</p></div>
                    <div className='ID-C-B5'><p className='ID-txt-5'>Wallet sender: {walletsender}</p></div>
                    <div className='ID-C-B6'><p className='ID-txt-5'>Network: {network}</p></div>
                    <div className='ID-C-B7'><p className='ID-txt-5'>Product ID: #{id}</p></div>
                  </div>
        ))}
    </div>
  )
}

export default ItemDetail
