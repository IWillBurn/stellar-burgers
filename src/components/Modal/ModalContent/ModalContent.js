import React from 'react';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../modal.module.css"
import PropTypes from "prop-types";

const ModalContent = (props) => {

    return (
        <div className={styles.modal__content}>
            <div className={styles.modal__close} onClick={() => {props.close()}}>
                <CloseIcon type="primary" />
            </div>
            {props.children}
        </div>
    );
}

ModalContent.propTypes = {
    close: PropTypes.func
}

export default ModalContent