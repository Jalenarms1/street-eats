import { OrderItem } from "./OrderItem";

export interface Order {
    id: string,
    orderItems: OrderItem[],
    total: number,
    email: string,
    phone: string,
    createdAt: Date,
    status: string,
    isConfirmed: boolean,
    confirmedAt: Date,

}