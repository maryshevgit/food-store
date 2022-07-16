import React, { FC } from 'react'
import styles from './Button.module.scss'

export interface ButtonProps{
  children?: React.ReactNode;
}

const Button:FC<ButtonProps> = ({children }) => {
  return (
    <button className={styles.button}>
        {children}
    </button>
  )
}

export default Button