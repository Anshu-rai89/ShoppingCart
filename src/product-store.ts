export type Product = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
};

export type ProductStore = {
  subscribe(listener: (products: Product[]) => void): () => void;
  changeQuantity(id: string, change: 1 | -1): void;
  removeProduct(id: string): void;
  addProduct(): void;
};

export const initialProducts: Product[] = [
  {
    id: "headphones",
    name: "Studio headphones",
    quantity: 1,
    price: 4500,
    image: "/logo192.png",
  },
  {
    id: "keyboard",
    name: "Compact keyboard",
    quantity: 2,
    price: 3200,
    image: "/logo192.png",
  },
];

export function createMemoryProductStore(
  seed: Product[] = initialProducts,
): ProductStore {
  let products = seed.map((product) => ({ ...product }));
  const listeners = new Set<(products: Product[]) => void>();
  const snapshot = () => products.map((product) => ({ ...product }));
  const publish = () => listeners.forEach((listener) => listener(snapshot()));

  return {
    subscribe(listener) {
      listeners.add(listener);
      listener(snapshot());
      return () => listeners.delete(listener);
    },
    changeQuantity(id, change) {
      products = products.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(0, product.quantity + change) }
          : product,
      );
      publish();
    },
    removeProduct(id) {
      products = products.filter((product) => product.id !== id);
      publish();
    },
    addProduct() {
      const nextNumber = products.length + 1;
      products = [
        ...products,
        {
          id: `product-${nextNumber}`,
          name: `Demo product ${nextNumber}`,
          quantity: 1,
          price: 1000,
          image: "/logo192.png",
        },
      ];
      publish();
    },
  };
}

export const defaultProductStore = createMemoryProductStore();
