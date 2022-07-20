import React from 'react'
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { addItem, addOrder, clearItems, minusItem, removeItem } from '../../redux/slices/cartSlice';

import { IFood } from '../../types/types';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './Cart.module.scss'

const Cart = () => {
  const data = useAppSelector(state => state.cart.cart)
  const totalPrice = useAppSelector(state => state.cart.totalPrice)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onClickMinus = (id:number, count:number) => {
    dispatch(minusItem(id))
  }

  const onClickPlus = (id: number) => {
    dispatch(
      addItem({
        id,
      } as IFood ),
    );
  };

  const onClickDelete = (id:number) => {
    dispatch(removeItem(id))
  }

  const payNow = () => {
    dispatch(addOrder())
    navigate('orders')
  }

  const totalCount = data.reduce((sum: number, item: any) => sum + item.count, 0);

  return (
    <div className={styles.cart}>
      <div className={styles.cart_header}>
        <div className={styles.cart_title}>
          <ShoppingCartIcon />
          Корзина
        </div>
        <div 
          className={classNames(
            styles.cart_trash,
            {[styles.disabled]: totalPrice === 0}
          )} 
          onClick={() => dispatch(clearItems())}>
          <DeleteIcon />
          Очистить корзину
        </div>
      </div>
      {!totalPrice &&        
        <div className={styles.cart_empty}>
          Корзина пустая
          <div className={styles.cart_empty_text}>Вероятней всего, вы не заказали ещё еду. <br/> Для того, чтобы заказать еду, перейдите на главную страницу</div>
        </div>
      }
      {data && data.map(item =>
        <div key={item.id}>
          <div className={styles.cart_item}>
            <div className={styles.item_title}>
              <img src={item.img} alt={item.name} />
              {item.name}
            </div>
            <div className={styles.item_add}>
              <button
                onClick={() => onClickMinus(item.id, item.count)}
                disabled={item.count === 1}
                className={classNames({[styles.disabled] : item.count === 1})}
              >
                -
              </button>
              {item.count}
              <button onClick={() => onClickPlus(item.id)}>
                +
              </button>
            </div>
            <div className={styles.item_price}>
              {item.price}
            </div>
            <button className={styles.btn_trash} onClick={() => onClickDelete(item.id)}>
              x
            </button>
          </div>
        </div>
      )}
      <div className={styles.cart_bottom}>
        <div className={styles.cart_goods}>
          Всего товаров: <span>{totalCount}</span> 
        </div>
        <div className={styles.cart_value}>
          Сумма заказа: <span>{totalPrice}</span>
        </div>
      </div>
      <div className={classNames(
        styles.cart_pay,
        {[styles.disabled]: totalPrice === 0}
      )}>
        <button 
          onClick={payNow}
          disabled={totalPrice === 0}
        >
          Оплатить заказ
        </button>
      </div>
    </div>
  )
}

export default Cart