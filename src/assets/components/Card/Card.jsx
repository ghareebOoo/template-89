import React, { useState } from 'react';

function Card({ myProduct , index , deleteInfo}) {
  const { category , price , image } = myProduct;
  const [count, setCount] = useState(1);  

 
  const incrementCount = () => {
    setCount(count + 1);
  };


  const decrementCount = () => {
    if (count > 1) { 
      setCount(count - 1);
    }
  };



  return (
    <div className='relative bg-white w-72 shadow-lg p-5'>
      <img className='w-full h-60 object-contain' src={image} alt='' />
      <h1 className='text-center mt-5'>{category}</h1>
      <h2 className='text-center mt-3'>{price}</h2>
      <div className='flex justify-center gap-5 items-center mt-5'>
        <i className='fa-solid fa-minus cursor-pointer' onClick={decrementCount}></i>
        <span>{count}</span>  
        <i className='fa-solid fa-plus cursor-pointer' onClick={incrementCount}></i>
      </div>
      {price > 100 && <div className='absolute top-0 left-0 p-1 rounded-md bg-yellow-600'>Expensive</div>}
      <button onClick ={(()=>{
        deleteInfo(index);
      })} className='bg-red-700 block m-auto mt-3 p-2 rounded-md text-white shadow-md'>Delete Product</button>
    </div>
  );
}

export default Card;
