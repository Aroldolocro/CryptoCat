import './ItemDetailContainer.css'

import ItemDetail from './ItemDetail'

import products from '../products';

import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const { id } = useParams()
  const nose = products.find(nosesi => nosesi.id == id)

  // const getItem = new Promise((resolve, reject) => {
  //   let productospa = {products}
  //   let afterPromises = true;
  //   // let afterPromises = false;
  //   setTimeout(() => {
  //     if (afterPromises) {
  //       resolve(productospa);
  //     } else {
  //       reject("Failed to get data");
  //     }
  //   }, 2000);
  // });

  // const [productos, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {

  //   getItem
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const response = await getItem;
  //       setProducts(response);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getProducts();
  // }, []);

  // function ItemDetailContainer() {
  // }

  return (

    <div className='IDC-background'>
        <div className='IDC-B1'></div>
        <div className='IDC-B2'>
          <div className='B2-content animate__animated animate__fadeInDown'>
            <div className='B2-C-1'>
              <div className='B2-C-1B1'>
                <div className='C-1B1-B1'><img src={nose.image3} className="IDC-img-1"/></div>
                <div className='C-1B1-B2'><p className='IDC-txt-2'>{nose.title}</p></div>
                <div className='C-1B1-B3'><p className='IDC-txt-3'>{nose.description}</p></div>
                <div className='C-1B1-B4'><p className='IDC-txt-4'>Network: {nose.network}</p></div>
                <div className='C-1B1-B5'><p className='IDC-txt-5'>Walletsender: {nose.walletsender}</p></div>
              </div>
            </div>
            <div className='B2-C-2'>
              <div className='B2-C-2B1'>
                  <p className='IDC-txt-6'>$: {nose.price}</p>
              </div>
            </div>
          </div>
        </div>
    </div>

  )
}

export default ItemDetailContainer