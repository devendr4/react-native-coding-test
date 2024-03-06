export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  orders: Order[];
}

export interface Order {
  orderId: number;
  orderDate: string;
  companyName: string;
  totalAmount: number;
  remainingAmount: number;
  orderStatus: "PAID" | "PENDING" | "LATE";
  payments: Payment[];
}

export interface Payment {
  paymentId: number;
  dueDate: string;
  amount: number;
  status: string;
}

export interface PaymentOrders extends Payment {
  companyName: string;
  finishedPaymentsCount: number;
}
