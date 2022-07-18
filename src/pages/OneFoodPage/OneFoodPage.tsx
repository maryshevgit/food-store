import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import { useGetPopularFoodQuery } from '../../redux/services/foodApi'
import styles from './OneFoodPage.module.scss'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Button from '../../ui/button/Button';
import { addItem } from '../../redux/slices/cartSlice';
import { IFood } from '../../types/types';

const OneFoodPage = () => {
  const foodId = useAppSelector(state => state.types.id)
  const dispatch = useAppDispatch()

  const {data} = useGetPopularFoodQuery(true)

  const food = data?.find(blog => blog.id === foodId)

  const addCart = (data: IFood) => {
    const item = {...data, count: 0}
    dispatch(addItem(item))
  }

  return (
    <div className={styles.one_food}>
      <div className={styles.title}>
        {food && food.name}
        {food && <Button children='Добавить в корзину' onClick={() => addCart(food)} />}
      </div>
      <div className={styles.img}>
        {food && <img src={food.img} alt={food.name} />}
        <div className={styles.rating}>
          {food && `${food.rating} /10`}
          <StarOutlineIcon />
        </div>
        <div className={styles.price}>
          {food && `${food.price} руб.`}
        </div>
      </div>
      
    </div>
  )
}

export default OneFoodPage