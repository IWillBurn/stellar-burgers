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
import {fetchOrder} from "../../services/reducers/OrderReducer";
import {useDrag, useDrop} from "react-dnd";
import {addToList, setBun} from "../../services/slices/BurgerIngredients";
import {addCountOfId, changeBun} from "../../services/slices/Ingredients";
import {BASE_URL} from "../../utils/consts";

function getBurgerIngredientsList(toppings, bun) {
    let ingredientsList = []
    if (bun !== undefined) {
        ingredientsList.push(bun["_id"])
    }
    toppings.forEach((topping) => {
        ingredientsList.push(topping["_id"])
    })
    if (bun !== undefined) {
        ingredientsList.push(bun["_id"])
    }
    return ingredientsList
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

    const url = BASE_URL + "/orders"

    const dispatch = useDispatch()
    const toppings = useSelector((state) => state.burgerIngredients.ingredients)
    const bun = useSelector((state) => state.burgerIngredients.bun)
    const ingredientsList = getBurgerIngredientsList(toppings, bun)

    const data = {
        url: url,
        ingredients: ingredientsList,
    }
    const top = bun;
    const bottom = bun;
    const sum = sumPrices(toppings, bun)

    const [, drop] = useDrop({
        accept: "ingredient",
        drop: (draggedItem) => {
            const ingredient = draggedItem.ingredient
            if (ingredient.type !== "bun") {
                dispatch(addToList(draggedItem.ingredient))
                dispatch(addCountOfId({id: draggedItem.ingredient["position"], count: 1}))
            }
            else{
                dispatch(changeBun({ old: bun !== undefined ? bun["position"] : -1, current: draggedItem.ingredient["position"]}))
                dispatch(setBun(draggedItem.ingredient))
            }
        },
    });

    const noOneIngredient = top === undefined && bottom === undefined && toppings.length === 0

    const [popup, setPopup] = useState(false)

    return (
        <>
            <div className={classNames("mt-25 pl-4", styles.constructor)} ref = {drop}>
                {   top !== undefined && (
                    <div className={"mr-4"}>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={top.name + " (верх)"}
                            price={top.price}
                            thumbnail={top.image}
                        />
                    </div>)
                }
                <BurgerConstructorToppingList toppings ={toppings}/>
                {   bottom !== undefined && (
                    <div className={"mr-4"}>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={bottom.name + " (низ)"}
                            price={bottom.price}
                            thumbnail={bottom.image}
                        />
                        <BurgerConstructorOrderPlate sum ={sum} createOrder={() => {setPopup(true); dispatch(fetchOrder(data))}}/>
                    </div>)
                }
                { noOneIngredient && (
                    <p className={classNames("text text_type_main-medium", styles["constructor__placeholder-text"])}>
                        Пожалуйста, перенесите сюда булку и ингредиенты для создания заказа
                    </p>
                    )
                }
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