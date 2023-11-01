import React from 'react';
import BurgerIngredientCard from "../BurgerIngredientCard/BurgerIngredientCard";
import styles from "../ingredients.module.css"
import classNames from "classnames";
import PropTypes from "prop-types";
import {ingredient} from "../../../utils/types";
const BurgerIngredientList = (props) => {
    return (
        <div className={classNames(styles.ingredients__list, "mt-10")}>
            <h2 className={classNames("text text_type_main-medium", styles["ingredients__list-title"])}> { props.category } </h2>
            {props.ingredients.map((ingredient) =>
                <BurgerIngredientCard ingredient ={ingredient} key={ingredient._id}/>
            )}
        </div>
    );
}

BurgerIngredientList.propTypes = {
    category: PropTypes.string,
    ingredients: PropTypes.arrayOf(ingredient),
};

export default BurgerIngredientList