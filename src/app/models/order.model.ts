export interface OrderItem {
  product: {
    id: number;
    name: string;
    price: number;
    image?: string;
    onSale?: boolean;
    salePrice?: number;
  };
  quantity: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  subtotal: number;
  shipping: number;
  discount: number;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  shippingInfo: {
    fullName: string;
    city: string;
  };
  paymentMethod: string;
  promoCode?: string | null;
  customerName?: string;
  customerEmail?: string;
}
