import React from 'react';
import styles from "../modal.module.css"
import PropTypes from "prop-types";

const ModalOverlay = (props) => {

    return (
        <div className={styles.modal__overlay} onClick={() => {props.close()}}>
        </div>
    );
}

ModalOverlay.propTypes = {
    close: PropTypes.func
}

export default ModalOverlay