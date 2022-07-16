import axios from 'axios';
import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { ITypes } from '../../types/types';
import styles from './Select.module.scss'

interface selectProps {
    value: number;
    selectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select:FC<selectProps> = ({value, selectChange}: selectProps) => {
    const [types, setTypes] = useState<ITypes[]>([])

    useEffect(() => {
        async function fetchTypes() {
          try {
            const { data } = await axios.get<ITypes[]>('https://62cb35b41eaf3786ebb6d4e1.mockapi.io/api/types');
            setTypes(data);
          } catch (error) {
            alert('Ошибка при получении типа еды!');
          }
        }
        fetchTypes();
      }, []);

    
    

  return (
    <select
        value={value}
        onChange={selectChange}
        className={styles.select}
    >
        {types.map(type =>
            <option 
                key={type.id}
                value={type.id}
            >
                {type.title}
            </option>    
        )}
    </select>
  )
}

export default Select