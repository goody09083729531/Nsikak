import React, { useState } from 'react';
import { client } from '../lib/client';
import { Market } from '../components';

const Shop = ({ shopData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredShopData, setFilteredShopData] = useState(null);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);

    const filteredData = shopData.filter((shop) =>
      shop.name.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    setFilteredShopData(filteredData);
  };
  return (
    <div className="container-fluid">
      <div className="containers">
        <div className="search">
          <h1>Our Products</h1>
          <input type="text" name="" id="find" placeholder="Search Product...." value={searchTerm} onChange={handleInputChange} />
        </div>

        <div className="products-container">
          {filteredShopData !== null ? (
            filteredShopData.length > 0 ? (
              filteredShopData.map((shop) => (
                <Market key={shop._id} shop={shop} />
              ))
            ) : (
              <p className='no-results'>No results found.</p>
            )
          ) : (
            shopData.map((shop) => <Market key={shop._id} shop={shop} />)
          )}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "shop"]';
  const shopData = await client.fetch(query);

  return {
    props: { shopData }
  }
}

export default Shop;