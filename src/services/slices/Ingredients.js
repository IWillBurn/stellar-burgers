import { createSlice } from '@reduxjs/toolkit'
import {fetchIngredients} from "../reducers/IngredientsReducer";
import {setBun} from "./BurgerIngredients";
import {useDispatch} from "react-redux";

const initialState = {
    ingredients: [],
    status: "idle",
    count: []
}

export const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {
        addCountOfId: (state, action) => {
            const {id, count} = action.payload
            const new_count = state.count.slice()
            new_count[id] += count
            state.count = new_count
        },
        changeBun: (state, action) => {
            const {old, current} = action.payload
            const new_count = state.count.slice()
            if (old !== -1) {
                new_count[old] -= 2
            }
            new_count[current] += 2
            state.count = new_count
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchIngredients.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchIngredients.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const { success, data } = action.payload
                const count = []
                if (success) {
                    const ingredients = []
                    data.forEach((ingredient, index) => {
                        ingredients.push({...ingredient, position: index})
                        count.push(0)
                    })
                    state.ingredients = ingredients
                    state.status = 'succeeded'
                    state.count = count
                }
                else {
                    state.ingredients = []
                    state.status = "failed"
                    state.count = []
                }
            })
            .addCase(fetchIngredients.rejected, (state, action) => {
                state.ingredients = []
                state.status = "failed"
                state.count = []
            });
    },
})

export const { addCountOfId , changeBun} = ingredientsSlice.actions

export default ingredientsSlice.reducer