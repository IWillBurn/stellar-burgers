import React from 'react';
import styles from "../app-header.module.css"
import classNames from "classnames";
import PropTypes from "prop-types";
const AppHeaderNavigationLink = (props) => {
    return (
        <nav className={classNames("m-4", "p-4", styles["header__navigation-link"])}>
            <div className={classNames("ml-1", "mr-1")}>
                {props.children}
            </div>
            <div className={classNames("ml-1", "mr-1")}>
                <p style={{color: props.color}} className={"text text_type_main-default"}>
                    {props.text}
                </p>
            </div>
        </nav>
    );
}

AppHeaderNavigationLink.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
};
export default AppHeaderNavigationLink