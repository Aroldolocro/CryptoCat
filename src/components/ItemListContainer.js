import React, { useEffect, useState } from "react";

import './ItemListContainer.css'

import getData from "../products";

import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await getData;
        setProducts(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return (
    <section className='S1-background'>
      <div className='S1-content'>
        <div className='S1-C-B0'></div>
        <div className='S1-C-B1'>
          <div className='S1-C-B1B1'>
            { greeting }
          </div>
        </div>

      <div className='S1-C-B2'>
        {loading ? <span className="S1-txt-1">Cargando...</span> : <ItemList items={products}/>}
      </div>

      </div>
    </section>
  )
}

export default ItemListContainer