import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import styles from '../pages/Home/Home.module.scss'
import { IFood } from '../types/types'
import Button from '../ui/button/Button'
import Loader from './Loader/Loader'

const PopularFood:FC = () => {
  const [food, setFood] = useState<IFood[]>([])
  const [count, setCount] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    async function fetchFood() {
      setIsLoading(true)
      try {
        const { data } = await axios.get<IFood[]>(`https://62cb35b41eaf3786ebb6d4e1.mockapi.io/api/items${count ? '?sortBy=rating&order=desc' : '?sortBy=rating&order=desc&page=1&limit=5'}`);
        setFood(data);
      } catch (error) {
        alert('Ошибка при получении типа еды!');
      } finally {
        setIsLoading(false)
      }
    }
    fetchFood();
  }, [count]);


  return (
    <div className={styles.popular__foods}>
      {isLoading ? <Loader /> : ''}
      <div className={styles.popular__foods_header}>
        <div className={styles.header__title}>
          Популярное
        </div>
        <div className={styles.header__view_more} onClick={() => setCount(!count)}>
          {count ? 'Скрыть' : 'Смотреть все'}
          <img src="https://img.icons8.com/material-sharp/24/000000/right--v2.png" alt='arrow'/>
        </div>
      </div>
      <div className={styles.popular__food_body}>
        {food.map(item => 
          <div key={item.id} className={styles.popular__food}>
            <div className={styles.popular__food_background_main}>
              <img src={item.img} alt="" />
              <div className={styles.popular__food_background}>
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

export default PopularFood