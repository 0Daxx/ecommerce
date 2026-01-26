import { it, expect, describe, vi , beforeEach} from "vitest";
import { Product } from "./Product";
import { render, screen } from "@testing-library/react";
import { userEvent } from '@testing-library/user-event'
import axios from "axios";


vi.mock('axios'); 
describe("Product Component", () => {
  let product ; 
  let loadCart 
  
  beforeEach(()=>{
    const product = {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"],
    };
    
    const loadCart = vi.fn();
  })

  
  // const loadCart = vi.fn();

  // integration test of
  it("Displays the product details correctly", () => {
    // screen = check the fake web page
    render(<Product product={product} loadCart={loadCart} />);
    
    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs"),
    ).tobeInTheDocument();

    expect(screen.getByText("$10.99")).tobeInTheDocument();

    expect(screen.getByTestId("product-image")).toBeAttribute(
    "src",
    "images/products/athletic-cotton-socks-6-pairs.jpg",
  );

  expect(screen.getByTestId("product-rating-stars-image")).toBeAttribute(
    "src",
    "images/ratings/rating-45.jpg" 
  );
  expect(screen.getByText('87')
  ).tobeInTheDocument();
  });

  it('adds a product to the cart',()=>{
    render(<Product product={product} loadCart={loadCart} />);
    const user = userEvent.setup();
    const addToCartBtn =   screen.getByTestId("add-to-cart-button");

    // user.click is async 
    await user.click(addToCartBtn);
    expect(axios.post).toHaveBeenCalledWith(
      '/api/cart-items',

      
      {
      productId ,
        quantity  
      }
    )
    expect(loadCart).toHaveBeenCalled();
  })
});
