import React, { useState, useEffect } from 'react';
import { getProducts } from '../config/api';
import { getCategories } from '../config/api';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchProductsAndCategories = async () => {
    setLoading(true);
    const response = await fetch(getCategories());
    const dat = await response.json();
    const res = await fetch(getProducts());
    const data = await res.json();
    setCategories(dat);
    setProducts(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchProductsAndCategories();
  }, []);
  return (
    <div className='overflow-hidden w-screen flex flex-col items-center justify-center p-6'>
      <h2 className='w-full text-center border-b-teal-500 border-b-2 text-2xl'>
        Latest Products
      </h2>
      {loading === true ? (
        <div className='mt-2 text-3xl'>Loading...</div>
      ) : (
        <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
          <div className='mt-2 flex flex-wrap justify-center items-center'>
            <button className='rounded capitalize m-1 text-sm p-1 border-2 border-teal-500 hover:bg-teal-500 hover:text-white transition-hover duration-500'>
              All
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                className='capitalize mx-0.5 text-sm border-2 rounded border-teal-500 p-1 hover:bg-teal-500 hover:text-white transition-hover duration-500'
              >
                {category}
              </button>
            ))}
          </div>
          {products.length > 1 && (
            <div className='container my-12 mx-auto px-4 md:px-12'>
              <div className='flex flex-wrap -mx-1 lg:-mx-4'>
                {products.map((product) => (
                  <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 overflow-hidden '>
                    <article className='overflow-hidden rounded-lg shadow-lg h-auto'>
                      <div className='flex justify-center items-center'>
                        <img
                          className='block h-96 w-full'
                          alt={product.title}
                          src={product.image}
                        />
                      </div>
                      <header className='flex items-center justify-between leading-tight p-2 md:p-4'>
                        <h1 className='text-lg'>
                          <p
                            className='no-underline hover:underline text-black'
                            onClick={() => navigate(`/product/${product.id}`)}
                          >
                            {product.title.substring(0, 12)}...
                          </p>
                        </h1>
                        <p className='text-grey-darker'>
                          ${product.price.toFixed(2)}
                        </p>
                      </header>
                      <footer className='flex items-center justify-center leading-none p-2 md:p-4'>
                        <button
                          className='capitalize mx-0.5 text-sm border-2 rounded border-teal-500 p-1 hover:bg-teal-500 hover:text-white transition-hover duration-500' 
                          onClick={() => navigate(`/product/${product.id}`)}
                        >
                          Buy Now
                        </button>
                      </footer>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
