import type { Timestamp, Image } from "./common";

export type Tag ={
    id: number;
    name: string;
    slug?: string;
    active?: boolean;
    createdAt?: Timestamp;
    updatedAt?: Timestamp;
}

export type Product = {
    id: number
    name: string
    dimensions: Dimension
    minimumQuantity: number
    description: string
    basePrice: number
    active: boolean
    tags: Tag[]
    images: Image[]
}

export type Dimension = {
    width: number
    height: number
    depth?: number
}




export type ProductMaterial = {
    materialId: Material["id"];
    productId: Product["id"];
};

export type Material = {
    id: number;
    name: string;
};

export type ProductTag = {
    tagId: Tag["id"];
    productId: Product["id"];
};
