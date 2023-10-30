import React from 'react';
import BurgerIngredientCard from "../BurgerIngredientCard/BurgerIngredientCard";
import styles from "../ingredients.module.css"
import classNames from "classnames";
import PropTypes from "prop-types";
const BurgerIngredientList = (props) => {
    return (
        <div className={classNames(styles.ingredients__list, "mt-10")}>
            <h2 style={{ display: 'flex', width: "100%" }} className={"text text_type_main-medium"}> { props.category } </h2>
            {props.ingredients.map((ingredient) =>
                <BurgerIngredientCard ingredient ={ingredient} key={ingredient._id}/>
            )}
        </div>
    );
}

BurgerIngredientList.propTypes = {
    category: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        _id: PropTypes.string,

        image_large: PropTypes.string,
        calories: PropTypes.number,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
    })),
};

export default BurgerIngredientList