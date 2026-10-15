import { describe, expect, it } from "vitest";

import { createMemoryProductStore, type Product } from "./product-store";

const product: Product = {
  id: "test-product",
  name: "Test product",
  quantity: 1,
  price: 250,
  image: "/logo192.png",
};

describe("memory product store", () => {
  it("publishes bounded quantity changes and removals", () => {
    const store = createMemoryProductStore([product]);
    let latest: Product[] = [];
    store.subscribe((products) => {
      latest = products;
    });

    store.changeQuantity(product.id, -1);
    store.changeQuantity(product.id, -1);
    expect(latest[0]?.quantity).toBe(0);

    store.changeQuantity(product.id, 1);
    expect(latest[0]?.quantity).toBe(1);

    store.removeProduct(product.id);
    expect(latest).toEqual([]);
  });
});
