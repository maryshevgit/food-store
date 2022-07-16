import React, { FC } from 'react'
import PopularFood from '../../components/PopularFood'
import Types from '../../components/Types'
import styles from './Home.module.scss'

const Home:FC = () => {
  return (
    <div className={styles.home}>
        <Types />
        <PopularFood />
    </div>
  )
}

export default Home