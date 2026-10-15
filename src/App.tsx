import { useEffect, useState } from "react";

import "./App.css";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import {
  defaultProductStore,
  type Product,
  type ProductStore,
} from "./product-store";

type AppProps = { store?: ProductStore };

export default function App({ store = defaultProductStore }: AppProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      store.subscribe((nextProducts) => {
        setProducts(nextProducts);
        setLoading(false);
      }),
    [store],
  );

  const count = products.reduce(
    (total, product) => total + product.quantity,
    0,
  );
  const total = products.reduce(
    (sum, product) => sum + product.quantity * product.price,
    0,
  );

  return (
    <div className="app-shell">
      <Navbar count={count} />
      <main className="cart-panel">
        <header className="cart-heading">
          <div>
            <p className="eyebrow">Pilot storefront</p>
            <h1>Your cart</h1>
          </div>
          <button type="button" onClick={() => store.addProduct()}>
            Add product
          </button>
        </header>

        {loading ? <p role="status">Loading cart…</p> : null}
        {!loading ? (
          <Cart
            products={products}
            onIncrease={(product) => store.changeQuantity(product.id, 1)}
            onDecrease={(product) => store.changeQuantity(product.id, -1)}
            onRemove={(product) => store.removeProduct(product.id)}
          />
        ) : null}

        <footer className="cart-total" aria-label="Cart total">
          <span>Total</span>
          <strong>₹{total.toLocaleString("en-IN")}</strong>
        </footer>
      </main>
    </div>
  );
}
