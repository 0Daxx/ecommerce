import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";


export function DeliveryOptions({deliveryOptions , cartItem}){

  return (
    <>
      <div className="delivery-options">
        <div className="delivery-options-title">Choose a delivery option:</div>

        {deliveryOptions.map((deliveryOption) => {
          let priceString = "FREE Shipping";
          if (deliveryOption.priceCents > 0) {
            priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping `;
          }
          return (
            <div key={deliveryOption.productId} className="delivery-option">
              <input
                type="radio"
                checked={deliveryOption.id === cartItem.deliveryOptionId}
                className="delivery-option-input"
                name={`delivery-option-${cartItem.productId}`}
              />
              <div>
                <div className="delivery-option-date">
                  {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                    "dddd, MMMM D",
                  )}
                </div>
                <div className="delivery-option-price">{priceString}</div>
              </div>
            </div>
          );
        })}
        <div className="delivery-option">
          <input
            type="radio"
            className="delivery-option-input"
            name="delivery-option-1"
          />
          <div>
            <div className="delivery-option-date">Wednesday, June 15</div>
            <div className="delivery-option-price">$4.99 - Shipping</div>
          </div>
        </div>
        <div className="delivery-option">
          <input
            type="radio"
            className="delivery-option-input"
            name="delivery-option-1"
          />
          <div>
            <div className="delivery-option-date">Monday, June 13</div>
            <div className="delivery-option-price">$9.99 - Shipping</div>
          </div>
        </div>
      </div>
    </>
  );
}