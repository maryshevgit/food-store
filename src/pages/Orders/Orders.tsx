import React from 'react'

import { useAppSelector } from '../../hooks/reduxHook'

import { calcTotalPrice } from '../../utils/calcTotalPrice'

import styles from './Order.module.scss'

const Orders = () => {
  const orders = useAppSelector(state => state.cart.orders)
  const totalPrice = calcTotalPrice(orders)

  return (
    <div className={styles.order}>
      {totalPrice ? <h2>Ваш заказ принят!</h2> : <h2>У вас нет заказов</h2>}
      {orders && orders.map(order =>
        <div key={order.id} className={styles.order_item}>
          <div className={styles.order_name}>
            <img src={order.img} alt={order.name} />
            {order.name} ({order.count}шт.)
          </div>
          <div>
            {order.price} руб.
          </div>
        </div>
      )}
      {totalPrice > 0 && <div className={styles.order_sum}>
        Итого: 
        <div>
          {totalPrice} руб.
        </div>
      </div>}
    </div>
  )
}

export default Orders