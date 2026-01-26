import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen , within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
// import { userEvent } from "@testing-library/user-event";
import axios from "axios";

import { isDescendantOrSelf } from "@testing-library/user-event/dist/cjs/utils/index.js";

import { Homepage } from "./Homepage";
import { data } from "react-router";
import { ProductsGrid } from "./ProductsGrid";

vi.mock("axios");

describe("Homepage component ", () => {
  let loadCart;

  beforeEach(() => {
    loadCart = vi.fn();
    // OR Promise.resolve()
    axios.get.mockImplementation(async (urlPath) => {
      if (urlPath === "/api/products") {
        return {
          data: [
            {
              id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
              image: "images/products/athletic-cotton-socks-6-pairs.jpg",
              name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
              rating: {
                stars: 4.5,
                count: 87,
              },
              priceCents: 1090,
              keywords: ["socks", "sports", "apparel"],
            },
            {
              id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
              image: "images/products/intermediate-composite-basketball.jpg",
              name: "Intermediate Size Basketball",
              rating: {
                stars: 4,
                count: 127,
              },
              priceCents: 2095,
              keywords: ["sports", "basketballs"],
            },
          ],
        };
      }
    });
  });

  it("displays the product correctly ", async () => {
    render(
    <MemoryRouter>
    <Homepage cart={[]} loadCart={loadCart} />
    </MemoryRouter>
    );
    // when component it loads find is used rather get 

    const productContainers = await screen.findAllByTestId("product-container");
    expect(productContainers.length).toBe(2);

    within(productContainers[0]).getByTest(
      "Black and Gray Athletic Cotton Socks - 6 Pairs",
    ).toBeInTheDocument();

    within(productContainers[1]).getByTest(
      "Intermediate Size Basketball",
    ).toBeInTheDocument();

  });
});

