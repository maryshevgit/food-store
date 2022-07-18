import { createUserWithEmailAndPassword, OAuthCredential, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { useAppDispatch } from '../../hooks/reduxHook'
import { setUser } from '../../redux/slices/userSlice'
import Button from '../../ui/button/Button'
import styles from './Auth.module.scss'

const Auth = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const dispatch = useAppDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isLogin = location.pathname === '/login'

  const handleLogin = (email:string, password:any) => {
    signInWithEmailAndPassword (auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
        }))
      })
      .catch (error => console.log(error)) 
      .finally(() => navigate('/'))
  }

  const handleRegistration = async(email:string, password:any) => {
    createUserWithEmailAndPassword (auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
        }))
      })
      .catch (error => console.log(error)) 
      .finally(() => navigate('/'))
  }


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
      <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Введите email' />
      <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Введите пароль' />
      {isLogin ?
        <Button onClick={() => handleLogin(email, password)}>Submit</Button>
        :
        <Button onClick={() => handleRegistration(email, password)}>Submit</Button>
      }
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