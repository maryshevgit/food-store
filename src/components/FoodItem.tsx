import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks/reduxHook'
import styles from '../pages/Food/Food.module.scss'
import { addItem } from '../redux/slices/cartSlice'
import { IFood } from '../types/types'
import Button from '../ui/button/Button'

interface FoodItemProps {
    data: IFood,
    getOneFood: (id:number) => void
}

const FoodItem:FC<FoodItemProps> = ({data, getOneFood}) => {
    const dispatch = useAppDispatch()

    const addCart = (data: IFood) => {
        const item = {...data, count: 0}
        dispatch(addItem(item))
    }

  return (
    <div key={data.id} className={styles.food} >
        <div className={styles.food_background_main} onClick={() => getOneFood(data.id)}>
            <img src={data.img} alt="" />
            <div className={styles.food_background}>
                <div className={styles.food__title}>
                    {data.name}
                </div>
                <div className={styles.food__priceAt}>
                    Цена от
                </div>
                <div className={styles.food__price}>
                    {data.price}p.
                </div>
            </div>
        </div>
        <div >
            <Button children = "Добавить" onClick={() => addCart(data)} />
        </div>
    </div>
  )
}

export default FoodItem