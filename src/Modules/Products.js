import React from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import productsData from '../Data/productsData';

const Products = () => {
  return (
    <div className='product-list'>
      <h2>Products Management</h2>
      <ProductList products={productsData} />
      <ProductForm />
    </div>
  );
}

export default Products;
