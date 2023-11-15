import React from 'react';
import BurgerConstructorMovableTopping from "../BurgerConstructorMoveableTopping/BurgerConstructorMovableTopping";
import styles from "../constructor.module.css"
import classNames from "classnames";
import PropTypes from "prop-types";
import {topping} from "../../../utils/types";
import {useDispatch, useSelector} from "react-redux";
import {setIngredient} from "../../../services/slices/IngredientModal";
import {setList} from "../../../services/slices/BurgerIngredients";

const BurgerConstructorToppingList = (props) => {

    const toppings = useSelector((state) => state.burgerIngredients.ingredients)
    const dispatch = useDispatch()
    const moveItem = (fromIndex, toIndex) => {
        const updatedItems = [...toppings];
        const [movedItem] = updatedItems.splice(fromIndex, 1);
        updatedItems.splice(toIndex, 0, movedItem);
        dispatch(setList(updatedItems));
    };
    return (
        <div className={classNames(styles["constructor__topping-list"], "mt-4 mb-4")}>
            {props.toppings.map((topping, index) =>
                <BurgerConstructorMovableTopping index={index} topping ={topping} key={topping.id} moveItem={moveItem}/>
            )}
        </div>
    );
}

BurgerConstructorToppingList.propTypes = {
    toppings: PropTypes.arrayOf(topping),
};

export default BurgerConstructorToppingList