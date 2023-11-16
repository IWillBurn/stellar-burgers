import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bun: undefined,
    ingredients: [],
    max_id: 0
}

export const burgerIngredientsSlice = createSlice({
    name: 'burgerIngredients',
    initialState,
    reducers: {
        addToList: (state, action) => {
            const max_id = state.max_id
            state.ingredients.push({...action.payload, id: max_id, index: state.ingredients.length})
            state.max_id += 1
        },
        setList: (state, action) => {
            state.ingredients = action.payload.slice()
        },
        setBun: (state, action) => {
            state.bun = action.payload
        },
        deleteIngredient: (state, action) => {
            state.ingredients.splice(action.payload, 1)
            const ingredients = state.ingredients.slice()
            ingredients.forEach((ingredient, index) => {
                ingredient.index = index
            })
            state.ingredients = ingredients
        },
    },
})

export const { addToList, setList, setBun, deleteIngredient} = burgerIngredientsSlice.actions

export default burgerIngredientsSlice.reducer