import React from 'react';
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../constructor.module.css";
import PropTypes from "prop-types";
const BurgerConstructorMovableTopping = (props) => {
    return (
        <div className={styles["constructor__movable-topping"]}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={props.topping.name}
                price={props.topping.price}
                thumbnail={props.topping.image}
            />
        </div>
    );
}

BurgerConstructorMovableTopping.propTypes = {
    topping:PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
    })
};

export default BurgerConstructorMovableTopping