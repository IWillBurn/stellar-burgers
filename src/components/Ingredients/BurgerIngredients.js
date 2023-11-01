import React from 'react';
import BurgerIngredientList from "./IngredientsList/BurgerIngredientList";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredients.module.css"
import classNames from "classnames";
import PropTypes from "prop-types";
import {ingredient} from "../../utils/types";

const BurgerIngredients = (props) => {

    const [current, setCurrent]= React.useState('Булки')
    return (
      <div className={styles.ingredients}>
          <h1 className={classNames("text text_type_main-large mt-10", styles.ingredients__title)}>
              Соберите бургер
          </h1>
          <div className={classNames("mt-5", styles.ingredients__container)}>
              <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
                  Булки
              </Tab>
              <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
                  Соусы
              </Tab>
              <Tab value="Начинка" active={current === 'Начинка'} onClick={setCurrent}>
                  Начинка
              </Tab>
          </div>
          <div className={classNames(styles.ingredients__scroller)}>
              <BurgerIngredientList ingredients={props.bun} category="Булки" />
              <BurgerIngredientList ingredients={props.sauce} category="Соусы" />
              <BurgerIngredientList ingredients={props.main} category="Начинка" />
          </div>
      </div>
    );
}

BurgerIngredients.propTypes = {
    bun: PropTypes.arrayOf(ingredient),
    sauce: PropTypes.arrayOf(ingredient),
    main: PropTypes.arrayOf(ingredient),
};


export default BurgerIngredients