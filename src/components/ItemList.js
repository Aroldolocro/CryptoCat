import Item from './Item'

import './ItemList.css'

const ItemList = ({ items }) => {
  return (
    <div className='IL-background'>
        {items.map(( {id, title, price, description, category, image}) => (
            <Item
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
            />
        ))}
    </div>
  )
}

export default ItemList
