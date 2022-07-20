import React, { FC } from 'react'
import styles from '../pages/Home/Home.module.scss'
import { setType, setTypeName } from '../redux/slices/typeSlice'
import { useAppDispatch } from '../hooks/reduxHook'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader/Loader'
import { useGetTypesQuery } from '../redux/services/foodApi'

const Types:FC = () => {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const changeType = (id: number, type:string) => {
    dispatch(setType(id))
    dispatch(setTypeName(type))
    navigate('/food-store/food')
  }

  const {data, isLoading} = useGetTypesQuery(0)

  return (
    <div className={styles.food__types} >
      {isLoading ? <Loader /> : ''}
      {data && data.map(type => 
          <div key={type.id} className={styles.type} onClick={() => changeType(type.id, type.title)}>
            <img src={type.imageURL} alt="" />
            {type.title}
          </div>
      )}
    </div>
  )
}

export default Types