import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  return (
    <section className='S1-background'>
      <div className='S1-content'>
        <div></div>
        <div className='S1-C-B0'></div>
        <div className='S1-C-B1'>
          <div className='S1-C-B1B1'>
            { greeting }
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItemListContainer