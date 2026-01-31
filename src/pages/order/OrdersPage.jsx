import axios from "axios";
import dayjs from "dayjs";

import { useEffect, useState, Fragment } from "react";
import { Header } from "../../components/Header";
import { formatMoney } from "../../utils/money";

import "./OrdersPage.css";
import { NavLink } from "react-router";
// import { TrackingPage  } from "./TrackingPage";


export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);
  // Generate data for order page

  useEffect(() => {
    
    const fetchOrderData = async () =>{
      const response = axios.get("/api/orders?expand=products") 
      setOrders((await response).data)
    }
    fetchOrderData();
    // axios.get("/api/orders?expand=products").then((response) => {
    //   setOrders(response.data);
    // });
  }, []);
  // declaration array so it runs only 1 time

  return (
    <>
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <>
                {/* need to provide key param to .... ????  */}
                <div key={order.id} className="order-container">
                  <div className="order-header">
                    <div className="order-header-left-section">
                      <div className="order-date">
                        <div className="order-header-label">Order Placed:</div>
                        <div>{dayjs(order.orderTimeMs).format("MMMM DD")}</div>
                      </div>
                      <div className="order-total">
                        <div className="order-header-label">Total:</div>
                        <div>{formatMoney(order.totalCostCents)}</div>
                      </div>
                    </div>

                    <div className="order-header-right-section">
                      <div className="order-header-label">Order ID:</div>
                      <div> {order.div} </div>
                    </div>
                  </div>

                  <div className="order-details-grid">
                    {order.products.map((orderProduct) => {
                      // Lesson : when looping through an array , each element must have a Key prop , but <> cant have it , so
                      return (
                        <Fragment key={orderProduct.product.id}>
                          <div className="product-image-container">
                            <img src={orderProduct.image} />
                          </div>

                          <div className="product-details">
                            <div className="product-name">
                              {orderProduct.product.name}
                            </div>
                            <div className="product-delivery-date">
                              Arriving on:{" "}
                              {dayjs(
                                orderProduct.estimatedDeliveryTimeMs,
                              ).format("MMMM D")}
                            </div>
                            <div className="product-quantity">
                              Quantity: {orderProduct.quantity}
                            </div>
                            <button className="buy-again-button button-primary">
                              <img
                                className="buy-again-icon"
                                src="images/icons/buy-again.png"
                              />
                              <span className="buy-again-message">
                                Add to Cart
                              </span>
                            </button>
                          </div>

                          <div className="product-actions">
                            {/* <NavLink to={`/tracking/${orderProduct.product.id}`}> */}
                            
                            {/* <NavLink to={`/tracking`} > */}
                            <NavLink to={`/tracking`} >

                              {/* <TrackPage orderProduct={orderProduct} /> */}
                              <button className="track-package-button button-secondary">
                                Track package
                              </button>
                            </NavLink>
                          </div>

                          {/* practice doing the above on the below sample data 
                          
                          <>
                            <div className="product-image-container">
                              <img src="images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg" />
                            </div>

                            <div className="product-details">
                              <div className="product-name">
                                Adults Plain Cotton T-Shirt - 2 Pack
                              </div>
                              <div className="product-delivery-date">
                                Arriving on: August 19
                              </div>
                              <div className="product-quantity">
                                Quantity: 2
                              </div>
                              <button className="buy-again-button button-primary">
                                <img
                                  className="buy-again-icon"
                                  src="images/icons/buy-again.png"
                                />
                                <span className="buy-again-message">
                                  Add to Cart
                                </span>
                              </button>
                            </div>

                            <div className="product-actions">
                              <a href="tracking.html">
                                <button className="track-package-button button-secondary">
                                  Track package
                                </button>
                              </a>
                            </div>
                          </>
                          */}
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
