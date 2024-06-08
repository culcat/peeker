export interface ProductData {
    rating: number;
    review_count:number;
    market: number;
    item_id: number;
    name: string;
    url: string;
    price: number;
    picture: string;
    time_ship: string | null;
    datetime_ship: string | null;
    geo: string | null;
}

export interface responseData {
    items: ProductData[]
    page_number: number
    offset: number
    pages:number
}