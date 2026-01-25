import axios from "axios";
import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";

import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
// import { OrdersPage } from "./pages/order/OrdersPage";
import { OrdersPage } from "./pages/order/OrdersPage";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };
  
  useEffect(() => {
    loadCart();
    //
    // axios.get("/api/cart-items?expand=product").then((response) => {
    // setCart(response.data);
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      {/* <Route path="/" element={<HomePage />}></Route> */}
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
    </Routes>
  );
}

export default App;
