import type { JsonValue, Timestamp, Image } from "./common";
import type { User } from "./user";
import type { Product } from "./product";

export type Order = {
    id: number;
    status: OrderStatus["id"];
    totalPaid: number;
    finalPrice: number;
    clientId: User["id"];
    review: string;
    sellerId: User["id"];
    estimatedDeliveryDate: Timestamp;
    deliveryDate: Timestamp;
    notes: string;
    minimumPayment: number;
    canShare: boolean;
    name: string;
    image: Image;
};

export type OrderStatus = {
    id: number;
    name:
        | "draft"
        | "generated"
        | "quoted"
        | "accepted"
        | "in process"
        | "pending change"
        | "cancelled"
        | "done"
        | "reviewed";
};

export type OrderItem = {
    orderId: Order["id"];
    productId: Product["id"];
    id: number;
    description: string;
    imageReference: string;
    customizations: { [key: string]: JsonValue };
    unitFinalPrice: number;
    quantity: number;
};
