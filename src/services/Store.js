import {configureStore} from '@reduxjs/toolkit'
import ingredientsReducers from "./slices/Ingredients";
import ingredientModalReducers from "./slices/IngredientModal";
import orderModalReducers from "./slices/OrderModal";
import burgerIngredientsReducers from "./slices/BurgerIngredients";
export const store = configureStore({  // createStore is deprecated
    reducer: {
        ingredients: ingredientsReducers,
        ingredientModal: ingredientModalReducers,
        orderModal: orderModalReducers,
        burgerIngredients: burgerIngredientsReducers,
    },
})