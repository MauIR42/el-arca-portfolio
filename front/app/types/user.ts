import type { Timestamp } from "./common";

export type User = {
    id: number;
    email: string;
    password: string;
    name: string;
    phone: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
};

export type RestorePasswordToken = {
    token: string;
    userId: number;
    expiresAt: Timestamp;
    createdAt: Timestamp;
};

export type UserRole = {
    userId: number;
    roleId: number;
};

export type Role = {
    id: number;
    name: "Client" | "Administrator" | "Seller" | "tester";
};

export type Permission = {
    id: number;
    name: "crud available products" | "generate order" | "manage orders";
};

export type RolePermission = {
    roleId: number;
    permissionId: number;
};
