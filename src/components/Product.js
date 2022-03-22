import React, { useState, useEffect } from 'react';
import { getSingleProduct } from '../config/api';
import { AiFillStar } from 'react-icons/ai';

const Product = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const fetchProduct = async () => {
    setLoading(true);
    const res = await fetch(getSingleProduct());
    const data = await res.json();
    setProduct(data);
    console.log(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className='container my-12 mx-auto px-4 md:px-12'>
          <div className='flex flex-wrap -mx-1 lg:-mx-4'>
            <div className='my-1 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 overflow-hidden '>
              <img
                src={product.image}
                className='block h-96 w-full'
                alt={product.title}
              />
            </div>
            <div className='my-1 px-1 w-full md:w-2/3 lg:my-4 lg:px-4 overflow-hidden '>
              <h1 className='capitalize text-gray-400 text-3xl'>
                {product.category}
              </h1>
              <p className='text-5xl mb-2'>{product.title}</p>
              <p className='text-2xl font-semibold flex items-center mb-2'>
                Rating: {product.rating.rate}
                <AiFillStar />
              </p>
              <p className='text-gray-500 text-xl mb-2'>
                ${product.price.toFixed(2)}
              </p>
              <p className='text-gray-500 text-2xl mb-2'>
                {product.description}
              </p>
              <div className='flex gap-2 mb-2'>
                <button className='rounded capitalize m-1 text-xl p-1 border-2 border-teal-500 hover:bg-teal-500 hover:text-white transition-hover duration-500'>
                  Add to Cart
                </button>
                <button className='rounded capitalize m-1 text-xl p-1 border-2 border-teal-500 hover:bg-teal-500 hover:text-white transition-hover duration-500'>
                  Go to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
