import { OrderItem } from "./OrderItem";
import { OrderItemTopping } from "./OrderItemTopping";

export interface Cart {
    orderItems: OrderItem[],
    total: number,
    businessId: string,
    businessName: string
}