import React from 'react';
import ModalOverlay from "./ModalOverlay/ModalOverlay";
import ModalContent from "./ModalContent/ModalContent";
import styles from "./modal.module.css"
import {createPortal} from "react-dom";
import PropTypes from "prop-types";

const Modal = (props) => {
    let modal = null
    if (props.open){
        modal =
            <div className={styles.modal}>
                <ModalOverlay close={props.close} />
                <ModalContent close={props.close}>
                    {props.children}
                </ModalContent>
            </div>
    }

    return (
        createPortal(modal, document.body)
    );
}

Modal.propTypes = {
    close: PropTypes.func
}

export default Modal