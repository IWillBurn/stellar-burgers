import React, {useEffect} from 'react';
import ModalOverlay from "./ModalOverlay/ModalOverlay";
import ModalContent from "./ModalContent/ModalContent";
import styles from "./modal.module.css"
import {createPortal} from "react-dom";
import PropTypes from "prop-types";

const Modal = (props) => {

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Escape') {
                props.close()
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const modal =
        <div className={styles.modal}>
            <ModalOverlay close={props.close} />
            <ModalContent close={props.close}>
                {props.children}
            </ModalContent>
        </div>

    return (
        createPortal(modal, document.getElementById("modals"))
    );
}

Modal.propTypes = {
    close: PropTypes.func
}

export default Modal