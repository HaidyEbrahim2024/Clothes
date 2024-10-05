import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Price() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    axios.get('./data.json')
      .then(response => {
        console.log('Data retrieved:', response.data); // تأكيد استرجاع البيانات بشكل صحيح
        setProducts(response.data.Girls);
        setFilteredProducts(response.data.Girls);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    console.log('Filter changed to:', value); // تأكيد تغيير قيمة التصفية

    setFilter(value);

    if (value === 'high') {
      const filtered = products.filter(product => product.price > 500);
      setFilteredProducts(filtered);
    } else if (value === 'low') {
      const filtered = products.filter(product => product.price <= 500);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div>
      <h2>Filter by Price:</h2>
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">All Products</option>
        <option value="high">High Price (Above 500)</option>
        <option value="low">Lower Price (500 and Below)</option>
      </select>

      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id}>
              <img src={product.img} alt={product.title} />
              <p>{product.title}</p>
              <p>Price: ${product.price}</p>
              <p>Available Colors: {product.availableColors}</p>
              <p>Price Before Discount: ${product.Pricebeforediscount}</p>
              <p>Rating: {product.stars.rating} ({product.stars.reviews} reviews)</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
