import React, { useEffect, useState } from "react";

import './ItemListContainer.css'

import products from "../products";

import ItemList from "../components/ItemList"
import { Link } from "react-router-dom";

import image8 from '../images/image8.png'

const ItemListContainer = ({ greeting }) => {

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

  return (
    <section className='S1-background animate__animated animate__fadeInDown'>

      <div className="S1-content">

        <div className="S1-C-B1"></div>

        <div className="S1-C-B2">
          {/* {loading ? <span className='ILC-txt-2'>Cargando...</span> : <ItemList items={products}/>} */}
          <div className="S1-C-B2B1">
            <div className="B2B1B1">
              <p className="S1-txt-1">{ greeting }</p>
              <p className="S1-txt-2">Tu Crypto Store favorita</p>
              <p className="S1-txt-3">"Blockchain es un libro mayor compartido e inmutable que facilita el proceso de registro de transacciones y de seguimiento de activos en una red de negocios."</p>
            </div>
          </div>
          <div className="S1-C-B2B2">
            <div className="B2B2B1">
              <img src={image8} alt="image" className="S1-img-1"/>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default ItemListContainer