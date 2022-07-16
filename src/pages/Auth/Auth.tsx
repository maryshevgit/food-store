import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../ui/button/Button'
import styles from './Auth.module.scss'

const Auth = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isLogin = location.pathname === '/login'


  return (
    <div className={styles.auth}>
      {isLogin ?
        <div className={styles.title}>
          Авторизация
        </div>
        :
        <div className={styles.title}> 
          Регистрация
        </div>
      }
      {!isLogin && <input type='text' placeholder='Введите имя' />}
      <input type='email' placeholder='Введите email' />
      <input type='password' placeholder='Введите пароль' />
      <Button>
        {isLogin ? 'Войти' : 'Регистрация'}
      </Button>
      <div>
        {isLogin ? 
          <div>
            Нет аккаунта? <span onClick={() => navigate('/registration')}>Зарегестрируйся</span>
          </div>
        : 
          <div>
            Есть аккаунт? <span onClick={() => navigate('/login')}>Войти</span>
          </div> 
        }
      </div>
    </div>
  )
}

export default Auth