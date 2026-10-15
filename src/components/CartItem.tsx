import type { Product } from "../product-store";

type CartItemProps = {
  product: Product;
  onIncrease: (product: Product) => void;
  onDecrease: (product: Product) => void;
  onRemove: (product: Product) => void;
};

export default function CartItem({
  product,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
  return (
    <article className="cart-item">
      <img src={product.image} alt="" className="product-image" />
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>₹{product.price.toLocaleString("en-IN")}</p>
        <p aria-label={`Quantity for ${product.name}`}>
          Qty: {product.quantity}
        </p>
      </div>
      <div
        className="cart-item-actions"
        aria-label={`Actions for ${product.name}`}
      >
        <button type="button" onClick={() => onIncrease(product)}>
          Increase
        </button>
        <button
          type="button"
          onClick={() => onDecrease(product)}
          disabled={product.quantity === 0}
        >
          Decrease
        </button>
        <button type="button" onClick={() => onRemove(product)}>
          Remove
        </button>
      </div>
    </article>
  );
}
