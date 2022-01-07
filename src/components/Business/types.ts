export interface orderedCard {
  id: number;
  complet: boolean;
  date: string;
  orders: order[];
}

export interface order {
  name: string;
  price: number;
  amount: number;
}

export interface shopCard {
  name: string;
  products: product[];
}

export interface product {
  name: string;
  price: number;
}
