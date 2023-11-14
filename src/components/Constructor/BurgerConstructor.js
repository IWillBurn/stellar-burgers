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
import {useDispatch, useSelector} from "react-redux";
import {fetchOrder} from "../../services/reducers/order_reducer";
import {useDrag, useDrop} from "react-dnd";
import {addToList, setBun} from "../../services/slices/burger_ingredients";
import {addCountOfId, changeBun} from "../../services/slices/ingredients";

function getBurgerIngredientsList(toppings, bun) {
    let ingredients_list = []
    ingredients_list.push(bun["_id"])
    toppings.forEach((topping) => {
        ingredients_list.push(topping["_id"])
    })
    ingredients_list.push(bun["_id"])
    return ingredients_list
}

function sumPrices(toppings, bun) {
    let total = 0
    if (bun?.price !== undefined) {
        total = bun.price * 2
    }
    toppings.forEach((topping) => {
        total += topping.price
    })
    return total
}

const BurgerConstructor = () => {

    const url = "https://norma.nomoreparties.space/api/orders"

    const dispatch = useDispatch()
    const toppings = useSelector((state) => state.burgerIngredients.ingredients)
    const bun = useSelector((state) => state.burgerIngredients.bun)
    const ingredients_list = getBurgerIngredientsList(toppings, bun)

    const data = {
        url: url,
        ingredients: ingredients_list,
    }
    const top = bun;
    const bottom = bun;
    const sum = sumPrices(toppings, bun)
    console.log(sum)

    const [, drop] = useDrop({
        accept: "ingredient",
        drop: (draggedItem) => {
            const ingredient = draggedItem.ingredient
            if (ingredient.type !== "bun") {
                dispatch(addToList(draggedItem.ingredient))
                dispatch(addCountOfId({id: draggedItem.ingredient["position"], count: 1}))
            }
            else{
                dispatch(changeBun({old: bun["position"], current: draggedItem.ingredient["position"]}))
                dispatch(setBun(draggedItem.ingredient))
            }
        },
    });

    const [popup, setPopup] = useState(false)

    return (
        <>
            <div className={classNames("mt-25 pl-4", styles.constructor)} ref = {drop}>
                <div className={"mr-4"}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={top.name + " (верх)"}
                        price={top.price}
                        thumbnail={top.image}
                    />
                </div>
                <BurgerConstructorToppingList toppings ={toppings}/>
                <div className={"mr-4"}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={bottom.name + " (низ)"}
                        price={bottom.price}
                        thumbnail={bottom.image}
                    />
                    <BurgerConstructorOrderPlate sum ={sum} createOrder={() => {setPopup(true); dispatch(fetchOrder(data))}}/>
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
export default BurgerConstructor