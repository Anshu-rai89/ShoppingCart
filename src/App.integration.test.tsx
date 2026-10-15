import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import App from "./App";
import { createMemoryProductStore, type Product } from "./product-store";

const product: Product = {
  id: "test-product",
  name: "Test product",
  quantity: 1,
  price: 250,
  image: "/logo192.png",
};

describe("shopping cart", () => {
  it("updates quantity, total, and removal through the store", async () => {
    const user = userEvent.setup();
    render(<App store={createMemoryProductStore([product])} />);

    expect(await screen.findByLabelText("1 items in cart")).toBeInTheDocument();
    expect(screen.getByLabelText("Cart total")).toHaveTextContent("₹250");

    await user.click(screen.getByRole("button", { name: "Increase" }));
    expect(screen.getByLabelText("2 items in cart")).toBeInTheDocument();
    expect(screen.getByLabelText("Cart total")).toHaveTextContent("₹500");

    await user.click(screen.getByRole("button", { name: "Remove" }));
    expect(screen.queryByText("Test product")).not.toBeInTheDocument();
    expect(screen.getByLabelText("Cart total")).toHaveTextContent("₹0");
  });
});
