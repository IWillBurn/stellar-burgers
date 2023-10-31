import React from 'react';
import BurgerConstructorMovableTopping from "../BurgerConstructorMoveableTopping/BurgerConstructorMovableTopping";
import styles from "../constructor.module.css"
import classNames from "classnames";
import PropTypes from "prop-types";
import {topping} from "../../../utils/types";
const BurgerConstructorToppingList = (props) => {
    return (
        <div className={classNames(styles["constructor__topping-list"], "mt-4 mb-4")}>
            {props.toppings.map((topping) =>
                <BurgerConstructorMovableTopping topping ={topping} key={topping.id} />
            )}
        </div>
    );
}

BurgerConstructorToppingList.propTypes = {
    toppings: PropTypes.arrayOf(topping),
};

export default BurgerConstructorToppingList