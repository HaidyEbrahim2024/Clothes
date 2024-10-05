import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PriceSearch = () => {
  const [filter, setFilter] = useState('all');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      // Replace this URL with your actual backend API endpoint to fetch products
      const response = await axios.get('/data.json'); // Example URL, replace with your actual API endpoint
      setProducts(response.data); // Update products state with the fetched data
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  let filteredProducts = products;

  if (filter === 'high') {
    filteredProducts = products.filter(product => product.price > 400);
  } else if (filter === 'low') {
    filteredProducts = products.filter(product => product.price <= 400);
  }

  return (
    <div>
      <h2>Price Search</h2>
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">All Products</option>
        <option value="high">Price &gt; 400</option>
        <option value="low">Price &lt;= 400</option>
      </select>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.title} - ${product.price} {/* Example fields, replace with your actual product fields */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceSearch;
