import React, { FC } from 'react'
import styles from './Header.module.scss'
import ListAltIcon from '@mui/icons-material/ListAlt';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useAppDispatch } from '../../hooks/reduxHook';
import { removeUser } from '../../redux/slices/userSlice';

const Header:FC = () => {
    const {isAuth} = useAuth()

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

  return (
    <div className={styles.header}>
        <div className={styles.name}>
            <img src={logo} alt="" />
        </div>
        <div className={styles.navbar}>
            <div className={styles.navbar__item} onClick={() => navigate('')}>
                <HomeIcon />
            </div>
            <div className={styles.navbar__item} onClick={() => navigate('cart/orders')}>
                <ListAltIcon />
            </div>
            {isAuth &&
                <div className={styles.navbar__item} onClick={() => navigate('/admin')}>
                    <AdminPanelSettingsIcon />
                </div>
            }
        </div>
        {isAuth ? 
            <div className={styles.auth} onClick={() => dispatch(removeUser())}>
                <LogoutIcon />
            </div>
        :
            <div className={styles.auth} onClick={() => navigate('/login')}>
                <LoginIcon />
            </div>
        }
    </div>
  )
}

export default Header