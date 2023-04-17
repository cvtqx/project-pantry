import React, {useState} from 'react'
import Card from './UI/Card';
import Button from './UI/Button';
import classes from './ProductForm.module.css';

const ProductForm = (props) => {

  const [enteredProduct, setEnteredProduct] = useState('');


  const inputChangeHandler = (event) =>{
    setEnteredProduct(event.target.value);
  }

  const formSubmitHandler = (event) =>{
    event.preventDefault();
    
// validation of input
    if(enteredProduct.trim().length === 0){
      return;
    }

    props.onAddProduct(enteredProduct);
    setEnteredProduct('');

  }

  return (
    <Card className={classes.input}>
      <form onSubmit={formSubmitHandler}>
        <div className="new-product__control">
          <label>Check what's left in your pantry and add item here: </label>
          <input
            type="text"
            value={enteredProduct}
            onChange={inputChangeHandler}
          ></input>
        </div>
        <div className="new-product__action">
          <Button type="submit">Add item</Button>
        </div>
      </form>
    </Card>
  );
}

export default ProductForm