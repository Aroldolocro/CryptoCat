import './ItemDetailContainer.css'

import ItemDetail from './ItemDetail'

import products from '../products';

import React, { useEffect, useState } from "react";

const ItemDetailContainer = () => {

  const getItem = new Promise((resolve, reject) => {
    let productospa = {products}
    let afterPromises = true;
    // let afterPromises = false;
    setTimeout(() => {
      if (afterPromises) {
        resolve(productospa);
      } else {
        reject("Failed to get data");
      }
    }, 2000);
  });

  const [productos, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    getItem
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
        const response = await getItem;
        setProducts(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  // function ItemDetailContainer() {
  // }

  return (

    <div className='IDC-background'>
        <div className='IDC-B1'></div>
        <div className='IDC-B2'>
          {loading ? <span className='IDC-txt-1'>Cargando...</span> : <ItemDetail items={products}/>}
        </div>
    </div>

  )
}

export default ItemDetailContainer