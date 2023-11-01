import React, {useEffect, useState} from 'react';
import "./constructor.module.css"
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorToppingList from "./BurgerConstructorToppingList/BurgerConstructorToppingList";
import BurgerConstructorOrderPlate from "./BurgerConstructorOrderPlate/BurgerConstructorOrderPlate";
import styles from "./constructor.module.css"
import classNames from "classnames";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import IngredientDetails from "../ModalIngredient/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import {topping} from "../../utils/types";
const BurgerConstructor = (props) => {
    let sum = props.top.price + props.bottom.price
    props.toppings.map((topping) => sum+=topping.price)

    const [popup, setPopup] = useState(false)

    return (
        <>
            <div className={classNames("mt-25 pl-4", styles.constructor)}>
                <div className={"mr-4"}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={props.top.name + " (верх)"}
                        price={props.top.price}
                        thumbnail={props.top.image}
                    />
                </div>
                <BurgerConstructorToppingList toppings ={props.toppings}/>
                <div className={"mr-4"}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={props.bottom.name + " (низ)"}
                        price={props.bottom.price}
                        thumbnail={props.bottom.image}
                    />
                    <BurgerConstructorOrderPlate sum ={sum} createOrder={() => {setPopup(true)}}/>
                </div>
            </div>
            {
                popup && (
                    <Modal  close={() => {setPopup(false)}}><OrderDetails /></Modal>
                )
            }
        </>
    );
}

BurgerConstructor.propTypes = {
    top: topping,
    bottom: topping,
    toppings: PropTypes.arrayOf(topping),
};

export default BurgerConstructor