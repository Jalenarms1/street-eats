import { FoodItem } from "./FoodItem";
import { Topping } from "./Topping";

export interface Business {
    id: string,
    name: string,
    category: string,
    image: string,
    address: string,
    phoneNumber: string,
    username: string,
    foodItems: FoodItem[],
    toppings: Topping[]
}