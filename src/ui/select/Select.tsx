import React, { ChangeEvent, FC } from 'react'
import { useGetTypesQuery } from '../../redux/services/foodApi';
import styles from './Select.module.scss'

interface selectProps {
    value: number;
    selectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select:FC<selectProps> = ({value, selectChange}: selectProps) => {

    const {data} = useGetTypesQuery(0)

  return (
    <select
        value={value}
        onChange={selectChange}
        className={styles.select}
    >
        {data && data.map(type =>
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