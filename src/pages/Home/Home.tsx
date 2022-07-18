import React, { FC } from 'react'
import PopularFood from '../../components/PopularFood'
import Types from '../../components/Types'
import styles from './Home.module.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHook';

const Home:FC = () => {
  const navigate = useNavigate()

  const price = useAppSelector(state => state.cart.totalPrice)
  const data = useAppSelector(state => state.cart.cart)
  const totalCount = data.reduce((sum: number, item: any) => sum + item.count, 0);

  return (
    <div className={styles.home}>
      <div className={styles.home_header}>
        <Types />
        <div className={styles.cart} onClick={() => navigate('cart')}>
          <div className={styles.price}>
            {price} р.
          </div>
          <div className={styles.border}></div>
          <ShoppingCartIcon />
          {totalCount}
        </div>
      </div>
        <PopularFood />
    </div>
  )
}

export default Home