import React, { FC } from 'react'
import styles from './Button.module.scss'

export interface ButtonProps{
  children?: React.ReactNode,
  onClick?: () => void,
}

const Button:FC<ButtonProps> = ({children, onClick}) => {
  return (
    <button className={styles.button} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button