import {createAsyncThunk} from "@reduxjs/toolkit";
import {checkResponse} from "../../utils/api";
export const fetchOrder = createAsyncThunk(
    "api/getOrder",
    async (data) => {
        const {url, ingredients} = data;
        const option= {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ingredients: ingredients})
        };
        return fetch(url, option).then(checkResponse)
    }
);