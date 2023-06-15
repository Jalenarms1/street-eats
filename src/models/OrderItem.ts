import { FoodItem } from "./FoodItem";
import { Order } from "./Order";
import { OrderItemTopping } from "./OrderItemTopping";
import { Topping } from "./Topping";

export interface OrderItem {
    id: string,
    orderId: string,
    order: Order,
    foodItemId: string,
    foodItem: FoodItem,
    quantity: number,
    toppings: OrderItemTopping[],
    total: number
}