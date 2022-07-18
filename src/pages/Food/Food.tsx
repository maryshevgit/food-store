import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import FoodItem from '../../components/FoodItem';
import Loader from '../../components/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import {  useGetFoodQuery } from '../../redux/services/foodApi';
import { setId } from '../../redux/slices/typeSlice';
import styles from './Food.module.scss'

const Food:FC = () => {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const foodType = useAppSelector(state => state.types.type)
  const foodTypeName = useAppSelector(state => state.types.typeName)

  const {data, isLoading} = useGetFoodQuery(foodType)

  const getOneFood = (id:number) => {
    dispatch(setId(id))
    navigate(`${id}`)
  }

  return (
    <div>
      {isLoading ? <Loader /> : ''}
      <div className={styles.food__type}>
        {foodTypeName}
      </div>
      <div className={styles.food_body}>
        {data && data.map(item =>
          <FoodItem key={item.id} data={item} getOneFood={getOneFood} />
        )}
      </div>
    </div>
  )
}

export default Food