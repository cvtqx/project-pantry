import React, {useState} from 'react';
import ProductForm from './components/ProductForm';
import ProductsList from './components/ProductsList';
import Header from './components/UI/Header';

function App() {

  const [productsList, setProductsList] = useState([]);


  const addProductHandler = (product) =>{
    setProductsList((prevProductsList) =>{
        return [...prevProductsList, product]
    })
  }
  return (
    <>
      <Header />
      <ProductForm onAddProduct={addProductHandler} />
      <ProductsList products={productsList} />
    </>
  );
}

export default App;
