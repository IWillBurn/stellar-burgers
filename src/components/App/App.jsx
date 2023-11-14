import React, {useEffect, useState} from 'react';
import styles from "./app.module.css"
import AppHeader from "../Header/AppHeader";
import BurgerIngredients from "../Ingredients/BurgerIngredients";
import BurgerConstructor from "../Constructor/BurgerConstructor";
import {useDispatch, useSelector} from "react-redux";
import {fetchIngredients} from "../../services/reducers/ingredients_reducer";
import {addCountOfId, getIngredients} from "../../services/slices/ingredients";
import {setBun, setList} from "../../services/slices/burger_ingredients";

async function fetchIngredientsData(url) {
    const response = await fetch(url);
    const result = await response.json();
    return result;
}
function App() {
    const ingredientsUrl = "https://norma.nomoreparties.space/api/ingredients"
    const dispatch = useDispatch();
    const status = useSelector((state) => state.ingredients.status);

    useEffect(() => {
        dispatch(fetchIngredients(ingredientsUrl));
    }, [dispatch]);

    if (status === 'succeeded') {
        return (
            <div className={styles.app}>
                <AppHeader/>
                <main className={styles["constructor-body"]}>
                    <BurgerIngredients/>
                    <BurgerConstructor/>
                </main>
            </div>
        );
    }
    return false
}

export default App;
