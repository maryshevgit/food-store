import React, { ChangeEvent, FC, useState } from 'react'

import Loader from '../../components/Loader/Loader'
import Select from '../../ui/select/Select'

import { useCreateFoodMutation } from '../../redux/services/foodApi'

import { IFood } from '../../types/types'

import styles from './Admin.module.scss'

const Admin:FC = () => {
  const [valueTitle, setValueTitle] = useState<string>('')
  const [valuePrice, setValuePrice] = useState<number | string>('')
  const [valueRating, setValueRating] = useState<number | string>('')
  const [valueImg, setValueImg] = useState<string>('')
  const [valueSelect, setValueSelect] = useState<number>(0)

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setValueTitle(e.target.value)
  }
  const changePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setValuePrice(+e.target.value)
  }
  const changeRating = (e: ChangeEvent<HTMLInputElement>) => {
    const rating = +e.target.value
    if(rating >= 0 && rating <= 10){
      setValueRating(+e.target.value)
    }
  }
  const changeImg = (e: ChangeEvent<HTMLInputElement>) => {
    setValueImg(e.target.value)
  }
  const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setValueSelect(+e.target.value)
  }


  const [createFood, {isLoading}] = useCreateFoodMutation() 

  const addItem = async() => {
    await createFood({
      name: valueTitle,
      price: valuePrice,
      img: valueImg,
      rating: valueRating,
      type: valueSelect,
    } as IFood)
    setValueImg('')
    setValuePrice('')
    setValueTitle('')
    setValueRating('')
    setValueSelect(0)
  }

  return (
    <div className={styles.admin}>
      {isLoading && <Loader />}
        <div>Добавьте новую еду</div>
        <input 
          value={valueTitle} 
          placeholder='Введите название'
          onChange={changeTitle} 
        />
        <input 
          placeholder='Введите цену'
          type="number"
          value={valuePrice} 
          onChange={changePrice} 
        />
        <input 
          placeholder='Введите рейтинг от 0 до 10'
          value={valueRating} 
          onChange={changeRating}  
        />
        <input 
          placeholder='Введите адрес изображения'
          value={valueImg} 
          onChange={changeImg}  
        />
        <Select value={valueSelect} selectChange={changeSelect} />
        <button onClick={addItem}>
          Добавить
        </button>
    </div>
  )
}

export default Admin