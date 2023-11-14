import React from 'react';
import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-details.module.css"
import success from "../../images/done.svg"
import {useSelector} from "react-redux";

const OrderDetails = () => {
    const order = useSelector((state) => state.orderModal.order);

    return (
        <div className={styles["modal-order"]}>
            <p className={"text text_type_digits-large mt-30"}>{order.number}</p>
            <p className={"text text_type_main-medium mt-8"}>
                идентификатор заказа
            </p>
            <div className={"mt-15 mb-15"}>
                <img className={styles["modal-order__image"]} src={success} alt={"Успех"}/>
            </div>
            <p className={"text text_type_main-default"}>
                Ваш заказ начали готовить
            </p>
            <p className={"text text_type_main-default text_color_inactive mt-2 mb-30"}>
                Дождитесь готовности на орбитальой станции
            </p>
        </div>
    );
}

export default OrderDetails