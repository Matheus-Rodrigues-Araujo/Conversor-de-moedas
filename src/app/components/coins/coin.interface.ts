export interface Coin {
    description: string;
    code: string;
}

export interface CoinsObject {
    [key: string] : Coin
}