import { Link } from "react-router";

// import HomePage from "../../components/HomePage";

import { Header } from "../../components/Header";

import "./TrackingPage.css";

export function TrackPage({cart}){
// export function TrackPage({cart , orderProduct}){
  return (
    <>
      <Header cart={cart} />
      <div class="tracking-page">
        <div class="order-tracking">
          <Link class="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div class="delivery-date">Arriving on : </div>
          {/* <div class="delivery-date">Arriving on {orderProduct.deliveryDate}</div> */}

          <div class="product-info">{/* {orderProduct.name} */}</div>

          <div class="product-info">Quantity: </div>
          {/* <div class="product-info">Quantity: {orderProduct.quantity}</div> */}

          <img
            class="product-image"
            src="images/placeholder-product.png"
            // src={orderProduct.image}
          />

          <div class="progress-labels-container">
            <div class="progress-label">Preparing</div>
            <div class="progress-label current-status">Shipped</div>
            <div class="progress-label">Delivered</div>
          </div>

          <div class="progress-bar-container">
            <div class="progress-bar" >Progress</div>
          </div>
        </div>
      </div>
    </>
  );
}