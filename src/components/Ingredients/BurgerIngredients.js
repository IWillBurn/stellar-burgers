import React, {useEffect, useRef} from 'react';
import BurgerIngredientList from "./IngredientsList/BurgerIngredientList";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredients.module.css"
import classNames from "classnames";
import PropTypes from "prop-types";
import {ingredient} from "../../utils/types";
import {useDispatch, useSelector} from "react-redux";
import ingredients, {addCountOfId} from "../../services/slices/Ingredients";
import {fetchIngredients} from "../../services/reducers/IngredientsReducer";
import {setBun} from "../../services/slices/BurgerIngredients";

export function splitByType(ingredients){
    const main = []
    const sauce = []
    const bun = []
    ingredients.map((ingredient) => {
        if (ingredient.type === "bun") {
            bun.push(ingredient)
        }
        if (ingredient.type === "main") {
            main.push(ingredient)
        }
        if (ingredient.type === "sauce") {
            sauce.push(ingredient)
        }
    })
    return [bun, sauce, main]
}
const BurgerIngredients = (props) => {
    const [current, setCurrent]= React.useState('Булки')
    const categories = ['Булки', 'Соусы', 'Начинка']
    const ingredients = useSelector((state) => state.ingredients.ingredients)
    const [bun, sauce, main] = splitByType(ingredients)

    const dispatch = useDispatch()

    const refScroll = useRef()
    const blocksRef = [useRef(), useRef(), useRef()]

    useEffect(() => {
        const handleScroll = () => {
            const scrollContainer = refScroll.current;
            if (!scrollContainer) return;

            const scrollPosition = scrollContainer.scrollTop;

            const distances = blocksRef.map((blockRef) => {
                if (!blockRef.current) return Infinity;
                const blockTop = blockRef.current.offsetTop;
                return Math.abs(scrollPosition - blockTop);
            });

            const minDistanceIndex = distances.indexOf(Math.min(...distances));
            setCurrent(categories[minDistanceIndex]);
        };
        const scrollContainer = refScroll.current
        scrollContainer.addEventListener('scroll', handleScroll);

        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, []);
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
          <div className={classNames(styles.ingredients__scroller)} ref={refScroll}>
              <BurgerIngredientList ingredients={bun} category="Булки" ref = {blocksRef[0]} />
              <BurgerIngredientList ingredients={sauce} category="Соусы" ref = {blocksRef[1]} />
              <BurgerIngredientList ingredients={main} category="Начинка" ref = {blocksRef[2]} />
          </div>
      </div>
    );
}

export default BurgerIngredients