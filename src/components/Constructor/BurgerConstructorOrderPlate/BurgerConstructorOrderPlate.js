import React from 'react';
import PricePlate from "../../PricePlate/PricePlate";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../constructor.module.css"
import classNames from "classnames";
import PropTypes from "prop-types";
const BurgerConstructorOrderPlate = (props) => {
    return (
        <div className={classNames(styles["constructor__order-plate"], "mt-10")}>
            <div className={classNames(styles["constructor__order-plate"], "mr-10")}>
                <PricePlate price={props.sum} size={"text_type_digits-medium"} margin={"m-2"}>
                    <CurrencyIcon type="primary" />
                </PricePlate>
            </div>
            <div style={{minWidth: "215px"}}>
                <Button htmlType="button" type="primary" size="large" onClick={() => {props.createOrder()}}>
                    Оформить заказ
                </Button>
            </div>
        </div>
    );
}

BurgerConstructorOrderPlate.propTypes = {
    sum: PropTypes.number,
    createOrder: PropTypes.func,
};

export default BurgerConstructorOrderPlate