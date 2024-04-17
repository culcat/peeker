import { createSlice, PayloadAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { MarketplaceItem } from "../types/MarketplaceItem";

interface MarketState {
    markets: MarketplaceItem[];
    loading: boolean;
    error: Error | null;
}

const initialState: MarketState = {
    markets: [],
    loading: false,
    error: null,
}

const marketsSlice = createSlice({
    name: 'markets',
    initialState,
    reducers: {
        fetchMarketsRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchMarketsSuccess: (state, action: PayloadAction<MarketplaceItem[]>) => {
            state.loading = false;
            state.markets = action.payload;
        },
        fetchMarketsFailure: (state, action: PayloadAction<Error>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
    extraReducers: (builder: ActionReducerMapBuilder<MarketState>) => {
        // No changes needed here
    },
});

export const marketsActions = marketsSlice.actions;
export default marketsSlice.reducer;
