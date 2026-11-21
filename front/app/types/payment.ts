import type { Order } from "./order";

export type PaymentStatus = {
    id: number;
    name: "approved" | "rejected" | "pending to approve";
};

export type Payment = {
    id: number;
    orderId: Order["id"];
    amount: number;
    proof: string;
    status: PaymentStatus["id"];
};
