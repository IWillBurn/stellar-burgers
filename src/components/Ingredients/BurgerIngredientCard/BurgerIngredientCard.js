import React, {useEffect, useState} from 'react';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PricePlate from "../../PricePlate/PricePlate";
import styles from "../ingredients.module.css"
import PropTypes from "prop-types";
import Modal from "../../Modal/Modal";
import IngredientDetails from "../../ModalIngredient/IngredientDetails";
import classNames from "classnames";
import {ingredient} from "../../../utils/types";
import OrderDetails from "../../OrderDetails/OrderDetails";
const BurgerIngredientCard = (props) => {

    const [popup, setPopup] = useState(false)

    return (
        <>
            <div className={styles.ingredients__card} onClick={() => {setPopup(true);}}>
                <Counter count={1} size="default" extraClass="m-1" />
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
                    <Modal  close={() => {setPopup(false)}}><IngredientDetails ingredient={props.ingredient}/></Modal>
                )
            }
        </>
    );
}

BurgerIngredientCard.propTypes = {
    ingredients: ingredient
};
export default BurgerIngredientCard