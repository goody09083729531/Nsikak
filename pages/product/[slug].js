import React, { useState } from 'react';
import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';
import Image from 'next/image';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { qty, setQty, onAdd } = useStateContext();

  const handleQtyChange = (event) => {
    setQty(parseInt(event.target.value, 10));
  };
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <Image src={urlFor(image && image[index]).url()} width={400} height={400} className="product-detail-image" quality={100} layout="intrinsic" alt="" />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <Image
                width={70}
                height={70}
                src={urlFor(item).url()}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
                quality={100}
                layout="intrinsic"
                alt=""
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fa-regular fa-star-half-stroke"></i>
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">₦{price}</p>
          <div className="quantity">
            <h3>Quantity: </h3><br />
            <input type="number" min="1" max="100000" value={qty} onChange={handleQtyChange} defaultValue="1" />
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type="button" className="buy-now" onClick="">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You May Also Like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;
  
    const products = await client.fetch(query);
  
    const paths = products.map((product) => ({
      params: { 
        slug: product.slug.current
      }
    }));
  
    return {
      paths,
      fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: {slug}}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';
    
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    return {
      props: { products, product }
    }
}

export default ProductDetails