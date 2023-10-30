import React from 'react';
import BurgerIngredientList from "./IngredientsList/BurgerIngredientList";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredients.module.css"
import classNames from "classnames";
import PropTypes from "prop-types";

const BurgerIngredients = (props) => {

    const [current, setCurrent]= React.useState('Булки')
    return (
      <div className={styles.ingredients}>
          <h1 style={{ display: 'flex', alignSelf: "start" }} className={"text text_type_main-large mt-10"}>
              Соберите бургер
          </h1>
          <div style={{ display: 'flex' }} className={"mt-5"}>
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
    bun: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        _id: PropTypes.string,

        image_large: PropTypes.string,
        calories: PropTypes.number,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
    })),
    sauce: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        _id: PropTypes.string,

        image_large: PropTypes.string,
        calories: PropTypes.number,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
    })),
    main: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        _id: PropTypes.string,

        image_large: PropTypes.string,
        calories: PropTypes.number,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
    })),
};


export default BurgerIngredients