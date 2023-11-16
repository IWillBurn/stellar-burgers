import React, {useEffect, useState} from 'react';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PricePlate from "../../PricePlate/PricePlate";
import styles from "../ingredients.module.css"
import Modal from "../../Modal/Modal";
import IngredientDetails from "../../ModalIngredient/IngredientDetails";
import classNames from "classnames";
import {ingredient} from "../../../utils/types";
import {setIngredient} from "../../../services/slices/IngredientModal";
import {useDispatch, useSelector} from "react-redux";
import {useDrag, useDrop} from "react-dnd";
import {addToList} from "../../../services/slices/BurgerIngredients";

const BurgerIngredientCard = (props) => {

    const [popup, setPopup] = useState(false)
    const dispatch = useDispatch();
    const count = useSelector((state) => state.ingredients.count)
    const ingredient = props.ingredient

    const [, drag] = useDrag({
        type: "ingredient",
        item: { ingredient },
    });

    let counter = <></>
    if (count[ingredient.position] > 0){
        counter = <Counter count={count[ingredient.position]} size="default" extraClass="m-1"/>
    }

    return (
        <>
            <div className={styles.ingredients__card} onClick={() => {setPopup(true); dispatch(setIngredient(props.ingredient));}} ref={drag}>
                { counter }
                <img className={styles["ingredients__card-image"]} src={props.ingredient.image} alt={props.ingredient.name}/>
                <div className={"p-1"}>
                    <PricePlate price={props.ingredient.price} size={"text_type_digits-default"} margin={"m-1"}>
                        <CurrencyIcon type="primary" />
                    </PricePlate>
                </div>
                <p className={classNames("text text_type_main-default", styles["ingredients__card-title"])}>{props.ingredient.name}</p>
            </div>
            {
                popup && (
                    <Modal  close={() => {setPopup(false)}}><IngredientDetails/></Modal>
                )
            }
        </>
    );
}

BurgerIngredientCard.propTypes = {
    ingredients: ingredient
};
export default BurgerIngredientCard