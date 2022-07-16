import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader';
import { useAppSelector } from '../../hooks/reduxHook';
import { IFood } from '../../types/types';
import Button from '../../ui/button/Button';
import styles from './Food.module.scss'

const Food:FC = () => {
  const [food, setFood] = useState<IFood[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const foodType = useAppSelector(state => state.types.type)
  const foodTypeName = useAppSelector(state => state.types.typeName)

  useEffect(() => {
    async function fetchFood() {
      setIsLoading(true)
      try {
        const { data } = await axios.get<IFood[]>(`https://62cb35b41eaf3786ebb6d4e1.mockapi.io/api/items?type=${foodType}`);
        setFood(data);
      } catch (error) {
        alert('Ошибка при получении еды!');
      } finally {
        setIsLoading(false)
      }
    }
    fetchFood();
  }, [foodType]);

  
  return (
    <div>
      {isLoading ? <Loader /> : ''}
      <div className={styles.food__type}>
        {foodTypeName}
      </div>
      <div className={styles.food_body}>
        {food.map(item => 
          <div key={item.id} className={styles.food}>
            <div className={styles.food_background_main}>
              <img src={item.img} alt="" />
              <div className={styles.food_background}>
                <div className={styles.food__title}>
                  {item.name}
                </div>
                <div className={styles.food__priceAt}>
                  Цена от
                </div>
                <div className={styles.food__price}>
                  {item.price}p.
                </div>
              </div>
            </div>
            <Button children = "Добавить" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Food