import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { ITypes } from '../types/types'
import styles from '../pages/Home/Home.module.scss'
import { setType, setTypeName } from '../redux/slices/typeSlice'
import { useAppDispatch } from '../hooks/reduxHook'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader/Loader'

const Types:FC = () => {
    const [types, setTypes] = useState<ITypes[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        async function fetchTypes() {
          setIsLoading(true)
          try {
            const { data } = await axios.get<ITypes[]>('https://62cb35b41eaf3786ebb6d4e1.mockapi.io/api/types');
            setTypes(data);
          } catch (error) {
            alert('Ошибка при получении типа еды!');
          } finally {
            setIsLoading(false)
          }
        }
        fetchTypes();
      }, []);

  const changeType = (id: number, type:string) => {
    dispatch(setType(id))
    dispatch(setTypeName(type))
    navigate('/food')
  }

  return (
    <div className={styles.food__types} >
      {isLoading ? <Loader /> : ''}
      {types.map(type => 
          <div key={type.id} className={styles.type} onClick={() => changeType(type.id, type.title)}>
            <img src={type.imageURL} alt="" />
            {type.title}
          </div>
      )}
    </div>
  )
}

export default Types