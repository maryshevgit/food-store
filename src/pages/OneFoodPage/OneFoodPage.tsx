import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks/reduxHook'

const OneFoodPage = () => {
  const { foodId } = useParams()
  const navigate = useNavigate()
  
  const food = useAppSelector(state =>
    state.food.food.find(food => food.id === foodId)
  )

  return (
    <div>OneFoodPage</div>
  )
}

export default OneFoodPage