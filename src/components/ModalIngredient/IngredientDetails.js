import React from 'react';
import IngredientParameter from "./IngredientParameter/IngredientParameter";
import styles from "./ingredient-details.module.css"
import classNames from "classnames";
import {useSelector} from "react-redux";
const IngredientDetails = () => {
    const ingredient = useSelector((state) => state.ingredientModal.ingredient);
    return (
        <div className={styles["ingredient-details"]}>
            <p className={classNames("text text_type_main-large mt-10 mr-10 ml-10", styles["ingredient-details__title"])}>
                Детали ингредиента
            </p>
            <img className={styles["ingredient-details__image"]} src={ingredient.image_large} alt={ingredient.name}/>
            <p className={"text text_type_main-medium mt-4"}>
                {ingredient.name}
            </p>
            <div className={classNames(styles["ingredient-parameter__list"], "mt-8 mb-15")}>
                <IngredientParameter name="Калории,ккал" value={ingredient.calories}/>
                <IngredientParameter name="Белки, г" value={ingredient.proteins}/>
                <IngredientParameter name="Жиры, г" value={ingredient.fat}/>
                <IngredientParameter name="Углеводы, г" value={ingredient.carbohydrates}/>
            </div>
        </div>
    );
}


export default IngredientDetails