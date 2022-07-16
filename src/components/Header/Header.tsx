import React, { FC } from 'react'
import styles from './Header.module.scss'
import ListAltIcon from '@mui/icons-material/ListAlt';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useNavigate } from 'react-router-dom';

const Header:FC = () => {
    const isAuth:boolean = false

    const navigate = useNavigate()

  return (
    <div className={styles.header}>
        <div className={styles.name}>
            N
        </div>
        <div className={styles.navbar}>
            <div className={styles.navbar__item} onClick={() => navigate('')}>
                <HomeIcon />
            </div>
            <div className={styles.navbar__item} onClick={() => navigate('/orders')}>
                <ListAltIcon />
            </div>
            <div className={styles.navbar__item} onClick={() => navigate('/favorites')}>
                <StarOutlineIcon />
            </div>
            {isAuth &&
                <div className={styles.navbar__item} onClick={() => navigate('/admin')}>
                    <AdminPanelSettingsIcon />
                </div>
            }
        </div>
        {isAuth ? 
            <div className={styles.auth}>
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