import axios from 'axios';
import { useEffect , useState } from 'react';
import { Header } from "../../components/Header";
import { ProductsGrid } from './ProductsGrid';

import "./HomePage.css";
export function HomePage({cart , loadCart}) {

// fetch is asynchronous : code that doenst finish immediately RETURNS a Promise  , similarly .then a method of fetch and also 
  // fetch("http://localhost:3000/api/products")
  // .then((response) =>{
  //   return response.json()
  // }).then((data) => {
  //     console.log(data);
  //   })
  const [products,setProducts] = useState([]);
  // const [cart,setCart] = useState([]);


  useEffect( () =>{
    // Lets us Control when some code runs 
    // axios.get("api/products")
    // .then((response) =>{
      // setProducts(response.data);
      // } ) 

      // 1.3 : In react , preference async await > promises   BUT useEffect must only return nothing or a cleanup function 

      const getHomeData = async () => {
        const response = await axios.get("api/products")
        setProducts(response.data);
      }
      getHomeData();
  },[])
  // DEPENDENCY array : to control when useEffect runs , empty array means will run once only 
    // Strictmode runs 2 times and hence in console their will be 2 response data 
    // !!! Tool Axiom : cleaner way to make requests to the backend 

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="images/favicon/home-favicon.png" />

      <Header cart={cart} />
      <div className="home-page">
        {<ProductsGrid products={products} loadCart={loadCart} />}
      </div>
    </>
  );
}
