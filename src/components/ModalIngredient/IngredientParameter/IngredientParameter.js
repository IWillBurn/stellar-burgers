import React from 'react';
import styles from "../ingredient-details.module.css"
import PropTypes from "prop-types";
const IngredientParameter = (props) => {
    return (
        <div className={styles["ingredient-parameter"]}>
            <p className={"text text_type_main-default text_color_inactive"}>
                {props.name}
            </p>
            <p className={"text text_type_main-default text_color_inactive"}>
                {props.value}
            </p>
        </div>
    );
}

IngredientParameter.propTypes = {
    name: PropTypes.string,
    value: PropTypes.number,
};

export default IngredientParameter