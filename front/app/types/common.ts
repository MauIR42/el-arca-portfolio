// API timestamps are serialized as ISO 8601 strings.

export type Timestamp = string;

export type JsonValue =
    | string
    | number
    | boolean
    | null
    | JsonValue[]
    | { [key: string]: JsonValue };


    export type Image = {
        url: string
        name: string
        width?: number
        height?: number
    }