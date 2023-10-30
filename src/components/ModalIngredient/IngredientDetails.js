import React from 'react';
import IngredientParameter from "./IngredientParameter/IngredientParameter";
import styles from "./ingredient-details.module.css"
import classNames from "classnames";
import PropTypes from "prop-types";
const IngredientDetails = (props) => {
    return (
        <div className={styles["ingredient-details"]}>
            <p className={"text text_type_main-large mt-10 mr-10 ml-10"} style={{alignSelf: "start"}}>
                Детали ингредиента
            </p>
            <img style={{height: "240px", width: "520px"}} src={props.ingredient.image_large} alt={props.ingredient.name}/>
            <p className={"text text_type_main-medium mt-4"}>
                {props.ingredient.name}
            </p>
            <div className={classNames(styles["ingredient-parameter__list"], "mt-8 mb-15")}>
                <IngredientParameter name="Калории,ккал" value={props.ingredient.calories}/>
                <IngredientParameter name="Белки, г" value={props.ingredient.proteins}/>
                <IngredientParameter name="Жиры, г" value={props.ingredient.fat}/>
                <IngredientParameter name="Углеводы, г" value={props.ingredient.carbohydrates}/>
            </div>
        </div>
    );
}

IngredientDetails.propTypes = {
    ingredient: PropTypes.shape({
        image_large: PropTypes.string,
        name: PropTypes.string,
        calories: PropTypes.number,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
    }),
};


export default IngredientDetails