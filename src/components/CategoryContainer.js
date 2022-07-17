import "./CategoryContainer.css"
import products from "../products"
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";

const CategoryContainer = () => {

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

  return (
    <div className="CC-background">

      <div className="CC-content">

        <div className="CC-C-B1"></div>

        {loading ? <span className='ICC-txt-5'>Cargando...</span> : 

        <div className="CC-C-B2">
          {products.filter(pro => pro.category == "topcoins").map(filteredPro => (
            <div className="ICC-background">
              <div className="ICC-content">
                <div className="ICC-C-B1">
                  <img src={filteredPro.image2} className="ICC-img-1"/>
                </div>
                <div className="ICC-C-B2">
                  <p className="ICC-txt-1">{filteredPro.title}</p>
                </div>
                <div className="ICC-C-B3">
                  <p className="ICC-txt-2">Categoría: {filteredPro.category}</p>
                </div>
                <div className="ICC-C-B4">
                  <p className="ICC-txt-3">$ {filteredPro.price}</p>
                </div>
                <div className="ICC-C-B5">
                  <Link to={`/item/${filteredPro.id}`} className="ICC-txt-4">Ver detalles</Link>
                </div>
              </div>
            </div>
          ))}
        </div>}

      </div>
    </div>
  )
}

export default CategoryContainer
