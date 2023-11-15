import React, {useEffect, useState} from 'react';
import styles from "./app.module.css"
import AppHeader from "../Header/AppHeader";
import BurgerIngredients from "../Ingredients/BurgerIngredients";
import BurgerConstructor from "../Constructor/BurgerConstructor";
import {useDispatch, useSelector} from "react-redux";
import {fetchIngredients} from "../../services/reducers/IngredientsReducer";
import {addCountOfId, getIngredients} from "../../services/slices/Ingredients";
import {setBun, setList} from "../../services/slices/BurgerIngredients";
import {BASE_URL} from "../../utils/consts";

async function fetchIngredientsData(url) {
    const response = await fetch(url);
    const result = await response.json();
    return result;
}
function App() {
    const ingredientsUrl = BASE_URL + "/ingredients"
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
