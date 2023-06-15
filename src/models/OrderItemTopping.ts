import { OrderItem } from "./OrderItem";
import { Topping } from "./Topping";

export interface OrderItemTopping {
    id?: string,
    orderItemId?: string,
    orderItem?: OrderItem,
    toppingId: string,
    topping?: Topping,
    onSide: boolean
}