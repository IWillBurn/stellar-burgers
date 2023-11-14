import {createAsyncThunk} from "@reduxjs/toolkit";
export const fetchOrder = createAsyncThunk(
    "api/getOrder",
    async (data) => {
        const {url, ingredients} = data;
        try {
            const response = await fetch(url, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ingredients: ingredients})
            });
            return await response.json();
        } catch (error) {
            throw new Error('Error fetching data');
        }
    }
);