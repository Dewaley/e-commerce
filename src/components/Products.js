import React, { useState, useEffect } from 'react';
import { getProducts } from '../config/api';
import { getCategories } from '../config/api';

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('');
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
    <div className='overflow-hidden w-screen flex flex-col items-center justify-center'>
      <h2 className='w-full text-center border-b-teal-500 border-b-2 text-2xl'>
        Latest Products
      </h2>
      {loading === true ? (
        <div className='mt-2 text-3xl'>Loading...</div>
      ) : (
        <div>
          <div className='mt-2 flex flex-wrap justify-center items-center'>
            <button className='btn rounded capitalize m-1 text-sm p-1 border-2 border-teal-500 hover:bg-teal-500 hover:text-white transition-hover duration-500'>
              All
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                className='btn capitalize mx-0.5 text-sm border-2 rounded border-teal-500 p-1 hover:bg-teal-500 hover:text-white transition-hover duration-500'
              >
                {category}
              </button>
            ))}
          </div>
          {products.length > 1 && (
            <div className='my-12 mx-auto px-4 md:px-12 w-screen'>
              <div className='flex flex-wrap flex-row'>
                {products.map((product) => (
                  <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 '>
                    <article className='overflow-hidden rounded-lg shadow-lg h-auto'>
                      <div className='flex justify-center items-center'>
                        <img
                          className='block h-96'
                          alt={product.title}
                          src={product.image}
                        />
                      </div>
                      <header className='flex items-center justify-between leading-tight p-2 md:p-4'>
                        <h1 className='text-lg'>
                          <p className='no-underline hover:underline text-black'>
                            Article Title
                          </p>
                        </h1>
                        <p className='text-grey-darker text-sm'>11/1/19</p>
                      </header>
                      <footer className='flex items-center justify-between leading-none p-2 md:p-4'>
                        <img
                          alt='Placeholder'
                          className='block rounded-full'
                          src='https://picsum.photos/32/32/?random'
                        />
                        <p className='ml-2 text-sm'>Author Name</p>
                        <span className='hidden'>Like</span>
                        <i className='fa fa-heart'></i>
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
