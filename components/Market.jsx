import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
import Image from 'next/image';

const Market = ({ shop: { image, name, slug, price } }) => {
  return (
    <Link href={`/product/${slug.current}`}>
      <div className="product-card">
        <Image 
          src={urlFor(image && image[0]).url()}
          width={250}
          height={250}
          quality={100}
          layout="intrinsic"
          className="product-image"
          alt=""
        />
        <p className="product-name">{name}</p>
        <p className="product-price">₦{price}</p>
      </div>
    </Link>
  )
}

export default Market;