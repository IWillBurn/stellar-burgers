import { createSlice } from '@reduxjs/toolkit'
import {fetchOrder} from "../reducers/order_reducer";

const initialState = {
    order: {
        number: 0,
    },
    status: "idle",
}

export const orderModalSlice = createSlice({
    name: 'orderModal',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrder.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchOrder.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const { name, order, success } = action.payload
                if (success) {
                    state.order = order
                    state.status = 'succeeded';
                }
                else {
                    state.order = {}
                    state.status = 'failed';
                }
            })
            .addCase(fetchOrder.rejected, (state, action) => {
                state.status = 'failed';
            });
    },
})

export const { } = orderModalSlice.actions

export default orderModalSlice.reducer