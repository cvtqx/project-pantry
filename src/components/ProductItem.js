import React from 'react';
import Button from './UI/Button';

const ProductItem = (props) => {
    return (
      <div>
            <p>{props.name}</p>
            <div className="new-product__action">
            <Button type="button">Delete</Button>
            </div>
            <div className="new-product__action">
            <Button type="button">Edit</Button>
            </div>
    </div>
  )
}

export default ProductItem