import {createAsyncThunk} from "@reduxjs/toolkit";
import {checkResponse} from "../../utils/api";
export const fetchIngredients = createAsyncThunk(
    "api/getIngredients",
    async (url) => {
        return fetch(url).then(checkResponse)
    }
);