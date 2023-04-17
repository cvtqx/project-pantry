import React from 'react';
import Card from './UI/Card';
import classes from './ProductsList.module.css';

const ProductsList = (props) => {
  return (
    <Card className={classes.products}>
      <ul>
        {props.products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </Card>
  );
}

export default ProductsList