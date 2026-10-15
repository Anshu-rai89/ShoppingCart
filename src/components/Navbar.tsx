type NavbarProps = { count: number };

export default function Navbar({ count }: NavbarProps) {
  return (
    <nav className="navigation" aria-label="Store navigation">
      <span className="brand">Pilot Shop</span>
      <span className="cart-count" aria-label={`${count} items in cart`}>
        Cart · {count}
      </span>
    </nav>
  );
}
