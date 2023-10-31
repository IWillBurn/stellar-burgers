import React, {useEffect, useState} from 'react';
import styles from "./app.module.css"
import AppHeader from "../Header/AppHeader";
import BurgerIngredients from "../Ingredients/BurgerIngredients";
import BurgerConstructor from "../Constructor/BurgerConstructor";
import Modal from "../Modal/Modal";
import IngredientDetails from "../ModalIngredient/IngredientDetails";

async function fetchIngredientsData(url) {
    const response = await fetch(url);
    const result = await response.json();
    return result;
}

function splitByType(ingredients){
    const main = []
    const sauce = []
    const bun = []
    ingredients.map((ingredient) => {
        if (ingredient.type === "bun") {
            bun.push(ingredient)
        }
        if (ingredient.type === "main") {
            main.push(ingredient)
        }
        if (ingredient.type === "sauce") {
            sauce.push(ingredient)
        }
    })
    return [bun, sauce, main]
}
function App() {

    const ingredientsUrl = "https://norma.nomoreparties.space/api/ingredients"
    const [ingredients, setIngredients] = useState([]);
    useEffect(() => {
        const getIngredients = async () => {
            try {
                const {success, data} = await fetchIngredientsData(ingredientsUrl);
                if (success) {
                    setIngredients(data)
                }
            }
            catch {
                setIngredients([])
            }
        };

        getIngredients();
    }, []);
    if (ingredients !== undefined && ingredients.length !== 0) {
        const [bun, sauce, main] = splitByType(ingredients)
        const top = bun[0]
        const bottom = bun[0]
        const toppings = [
            { ...sauce[0], "id": 1},
            { ...main[0], "id": 2},
            { ...main[0], "id": 3},
            { ...main[0], "id": 4},
            { ...main[0], "id": 5},
            { ...main[0], "id": 6},
            { ...main[0], "id": 7},
            { ...main[0], "id": 8},
            { ...main[0], "id": 9},
            { ...main[0], "id": 10},
        ]
        return (
            <div className={styles.app}>
                <AppHeader/>
                <main className={styles["constructor-body"]}>
                    <BurgerIngredients bun={bun} sauce={sauce} main={main}/>
                    <BurgerConstructor top={top} bottom={bottom} toppings={toppings}/>
                </main>
            </div>
        );
    }
}

export default App;
