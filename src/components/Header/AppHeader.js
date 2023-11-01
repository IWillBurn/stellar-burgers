import React from 'react';
import AppHeaderLogo from "./AppHeaderLogo/AppHeaderLogo";
import AppHeaderNavigationLink from "./AppHeaderNavigationLink/AppHeaderNavigationLink";
import { BurgerIcon, ListIcon, ProfileIcon, } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from "./app-header.module.css"
import classNames from "classnames";

const AppHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={classNames(styles.header__group, styles.header__group_position_left)}>
                    <AppHeaderNavigationLink text="Конструктор" color="#FFFFFF">
                        <BurgerIcon type="primary" />
                    </AppHeaderNavigationLink>
                    <AppHeaderNavigationLink text="Лента&nbsp;заказов" color="#8585AD">
                        <ListIcon type="secondary" />
                    </AppHeaderNavigationLink>
                </div>
                <div className={classNames(styles.header__group, styles.header__group_position_center)}>
                    <AppHeaderLogo />
                </div>
                <div className={classNames(styles.header__group, styles.header__group_position_right)}>
                    <AppHeaderNavigationLink text="Личный кабинет" color="#8585AD">
                        <ProfileIcon type="secondary" />
                    </AppHeaderNavigationLink>
                </div>
            </div>
        </header>
    );
}

export default AppHeader