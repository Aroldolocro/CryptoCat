const products =

[
    
    {"id":1,
    "title":"UST",
    "description":"Stablecoin",
    "price":"1.00 USD",
    "pictureUrl": "./images/image1.png"
    },

    {"id":2,
    "title":"BNB",
    "description":"Altcoin",
    "price":"240.00 USD",
    "pictureUrl": "./images/image1.png"
    },

    {"id":3,
    "title":"ETH",
    "description":"Altcoin",
    "price":"1,200.00 USD",
    "pictureUrl": "./images/image1.png"
    }

]

const getData = new Promise((resolve, reject) => {
    let afterPromises = true;
    // let afterPromises = false;
    setTimeout(() => {
      if (afterPromises) {
        resolve(products);
      } else {
        reject("Failed to get data");
      }
    }, 2000);
  });
  
  export default getData;