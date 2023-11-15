import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ingredient: {}
}

export const ingredientModalSlice = createSlice({
    name: 'ingredientModal',
    initialState,
    reducers: {
        setIngredient: (state, action) => {
            state.ingredient = action.payload
        },
    },
})

export const { setIngredient } = ingredientModalSlice.actions

export default ingredientModalSlice.reducer