import type { Product } from "../product-store";
import CartItem from "./CartItem";

type CartProps = {
  products: Product[];
  onIncrease: (product: Product) => void;
  onDecrease: (product: Product) => void;
  onRemove: (product: Product) => void;
};

export default function Cart({
  products,
  onIncrease,
  onDecrease,
  onRemove,
}: CartProps) {
  return (
    <section className="cart-items" aria-label="Cart items">
      {products.map((product) => (
        <CartItem
          product={product}
          key={product.id}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onRemove={onRemove}
        />
      ))}
    </section>
  );
}
