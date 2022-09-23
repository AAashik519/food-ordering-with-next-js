import React from 'react'
import styles from '../styles/PizzaList.module.css'
import PizzaCart from './PizzaCart'
const PizzaList = () => {
  return (
    <div className={styles.containear}> 
      <h1 className={styles.title}>The BEST PIZZA In TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta atque sunt amet incidunt obcaecati recusandae minus qui fugiat et quod?
      </p>

      <div className={styles.wrapper}>
        <PizzaCart />
        <PizzaCart />
        <PizzaCart />
        <PizzaCart />
      </div>
    </div>
  )
}

export default PizzaList