import { useState } from "react";
import axios from "axios";

import { formatMoney } from "../../utils/money";

export function Product({ product, loadCart }) {
  const [quantity, SetQuantity] = useState(1);

  // axios post is asynchronous
  async function addToCart(){
    await axios.post("/api/cart-items", {
      // request bo dy : send info using object
      productId: product.id,
      // quantity: quantity
      quantity
    });
    await loadCart();

  }

  function selectQuantity(event) {
      SetQuantity(Number(event.target.value));
  };

  return (
    <>
      <div className="product-container">
        <div className="product-image-container">
          <img
            className="product-image"
            src={product.image}
            data-test-id="product-image"
          />
        </div>

        <div className="product-name limit-text-to-2-lines">{product.name}</div>

        <div className="product-rating-container">
          <img
            className="product-rating-stars"
            data-test-id="product-rating-stars-image"
            src={`images/ratings/rating-${product.rating.stars * 10}.png`}
          />
          <div className="product-rating-count link-primary">
            {product.rating.count}
          </div>
        </div>

        <div className="product-price">{formatMoney(product.priceCents)}</div>

        <div className="product-quantity-container">
          <select value={quantity} onChange={selectQuantity}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div className="product-spacer"></div>

        <div className="added-to-cart">
          <img src="images/icons/checkmark.png" />
          Added
        </div>

        <button
          className="add-to-cart-button button-primary"
          data-testid = "add-to-cart-button"
          onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </>
  );
}
