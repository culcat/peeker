export interface MainItem {
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