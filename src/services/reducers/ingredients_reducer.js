import {createAsyncThunk} from "@reduxjs/toolkit";
export const fetchIngredients = createAsyncThunk(
    "api/getIngredients",
    async (url) => {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            throw new Error('Error fetching data');
        }
    }
);