import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const SearchProduct = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/data.json');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (products && searchTerm) {
      const results = [];
      for (const key in products) {
        const category = products[key];
        const filteredProducts = category.filter(product =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        results.push(...filteredProducts);
      }
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, products]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCloseSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <div className='SearchProduct'> 
      <div className="input-group my-3 col-6">
        <input
          type="text"
          className="col-4 p-2"
          placeholder="Search About Product"
          value={searchTerm}
          onChange={handleChange}
          style={{ boxShadow: 'none' }} // إزالة تأثير text-shadow هنا

        />
        <button className="btn btn-outline-secondary" type="button" onClick={handleCloseSearch}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <button className="btn btn-outline-secondary" type="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      {loading && <p>Loading...</p>}
      <div className="row">
        {searchResults.length > 0 ? (
          searchResults.map(product => (
            <div key={product.id} className="col-md-4 mb-3">
              <div className="card">
                <img src={product.img} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">Price: ${product.price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          !loading && <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchProduct;
