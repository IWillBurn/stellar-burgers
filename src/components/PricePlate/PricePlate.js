import React from 'react';
import styles from "./price-plate.module.css"
import PropTypes from "prop-types";
const PricePlate = (props) => {
    return (
        <div className={styles["price-plate"]}>
            <p className={"text " + props.size + " " + props.margin}>{props.price}</p>
            {props.children}
        </div>
    );
}

PricePlate.propTypes = {
    size: PropTypes.string,
    margin: PropTypes.string,
    price: PropTypes.number,
};

export default PricePlate