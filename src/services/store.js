import {configureStore} from '@reduxjs/toolkit'
import ingredientsReducers from "./slices/ingredients";
import ingredientModalReducers from "./slices/ingredient_modal";
import orderModalReducers from "./slices/order_modal";
import burgerIngredientsReducers from "./slices/burger_ingredients";
export const store = configureStore({  // createStore is deprecated
    reducer: {
        ingredients: ingredientsReducers,
        ingredientModal: ingredientModalReducers,
        orderModal: orderModalReducers,
        burgerIngredients: burgerIngredientsReducers,
    },
})