import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Load from './assets/components/Loading/Load';
import Card from './assets/components/Card/Card';

function App() {
  const [products, setProducts] = useState(null);

  async function getProducts() {
    const options = {
      method: "GET",
      url: "https://fakestoreapi.com/products",
    };
    let {data} = await axios(options);
    setProducts(data);
    console.log(data); 
  }

  useEffect(() => {
    getProducts();
  }, []); 


  useEffect(() => {
   
    console.log("Products updated:", products); 
 
  }, [products]); 


  const deleteProduct = (index) => {
    const newCount = [...products];
    newCount.splice(index, 1);
    setProducts(newCount);
  };

  useEffect(() => {
    console.log('App component mounted'); 

  
    return () => {
      console.log('App component unmounted'); 
    };
  }, []); 

  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-8 h-screen p-10">
        {products === null ? (
          <Load />
        ) : (
          products.map((product, index) => (
            <Card
              index={index}
              myProduct={product}
              key={product.id}
              deleteInfo={deleteProduct}
            />
          ))
        )}
      </div>
    </>
  );
}

export default App;
