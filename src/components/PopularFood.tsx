import React, { FC,  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks/reduxHook'
import styles from '../pages/Home/Home.module.scss'
import { useGetPopularFoodQuery } from '../redux/services/foodApi'
import { setId } from '../redux/slices/typeSlice'
import FoodItem from './FoodItem'
import Loader from './Loader/Loader'
import close from '../assets/close.svg'

const PopularFood:FC = () => {
  const [count, setCount] = useState<boolean>(false)

  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const {data, isLoading} = useGetPopularFoodQuery(count)

  const getOneFood = (id:number) => {
    dispatch(setId(id))
    navigate(`food/${id}`)
  }

  return (
    <div className={styles.popular__foods}>
      {isLoading ? <Loader /> : ''}
      <div className={styles.popular__foods_header}>
        <div className={styles.header__title}>
          Популярное
        </div>
        <div className={styles.header__view_more} onClick={() => setCount(!count)}>
          {count ? 'Скрыть' : 'Смотреть все'}
          {count ? 
            <img src={close} alt='arrow' className={styles.close}/>
            :
            <img className={styles.arrow} src="https://img.icons8.com/material-sharp/24/000000/right--v2.png" alt='close'/>
          }
          
        </div>
      </div>
      <div className={styles.popular__food_body}>
        {data && data.map(item => 
          <FoodItem key={item.id} data={item} getOneFood={getOneFood} />
        )}
      </div>
    </div>
  )
}

export default PopularFood