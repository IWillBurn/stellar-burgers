import React, {useState} from 'react';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PricePlate from "../../PricePlate/PricePlate";
import styles from "../ingredients.module.css"
import PropTypes from "prop-types";
import {createPortal} from "react-dom";
import Modal from "../../Modal/Modal";
import OrderDetails from "../../OrderDetails/OrderDetails";
import IngredientDetails from "../../ModalIngredient/IngredientDetails";
const BurgerIngredientCard = (props) => {

    const [popup, setPopup] = useState(false)

    return (
        <>
            <div className={styles.ingredients__card} onClick={() => {setPopup(true);}}>
                <Counter count={1} size="default" extraClass="m-1" />
                <img style={{height: "120px", width: "240px"}} src={props.ingredient.image} alt={props.ingredient.name}/>
                <div className={"p-1"}>
                    <PricePlate price={props.ingredient.price} size={"text_type_digits-default"} margin={"m-1"}>
                        <CurrencyIcon type="primary" />
                    </PricePlate>
                </div>
                <p style={{ textAlign: 'center', height: "48px" }} className={"text text_type_main-default"}>{props.ingredient.name}</p>
            </div>
            <Modal open={popup} close={() => {setPopup(false)}}><IngredientDetails ingredient={props.ingredient}/></Modal>
        </>
    );
}

BurgerIngredientCard.propTypes = {
    ingredients: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,

        image_large: PropTypes.string,
        calories: PropTypes.number,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
    }),
};
export default BurgerIngredientCard