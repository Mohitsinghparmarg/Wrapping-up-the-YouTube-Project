import React from 'react'
import Button from './Button'

const ButonList = () => {
  return (
    <div className='flex'>
        <Button name="All"/>
        <Button name="Gaming"/>
        <Button name="Songs"/>
        <Button name="Live"/>
        <Button name="Cricket"/>
        <Button name="FootBall"/>
        <Button name="News"/>
        <Button name="Motivation"/>
        <Button name="Health"/>
    </div>
  )
}

export default ButonList