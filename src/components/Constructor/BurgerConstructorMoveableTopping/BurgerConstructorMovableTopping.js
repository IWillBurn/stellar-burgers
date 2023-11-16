import React from 'react';
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../constructor.module.css";
import PropTypes, {checkPropTypes} from "prop-types";
import {topping} from "../../../utils/types";
import {useDrag, useDrop} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import {deleteIngredient} from "../../../services/slices/BurgerIngredients";
import {addCountOfId} from "../../../services/slices/Ingredients";
const BurgerConstructorMovableTopping = (props) => {

    const index = props.index
    const dispatch = useDispatch();
    const [, ref] = useDrag({
        type: "topping",
        item: { index },
    });

    const [, drop] = useDrop({
        accept: "topping",
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                props.moveItem(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    return (
        <div className={styles["constructor__movable-topping"]} ref={(node) => ref(drop(node))}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={props.topping.name}
                price={props.topping.price}
                thumbnail={props.topping.image}
                handleClose={() => {
                    dispatch(deleteIngredient(props.index))
                    dispatch(addCountOfId({id: props.topping.position, count: -1}))
                }}
            />
        </div>
    );
}

BurgerConstructorMovableTopping.propTypes = {
    topping: topping,
    index: PropTypes.number,
    moveItem: PropTypes.func,
};

export default BurgerConstructorMovableTopping