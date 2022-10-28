import React from 'react'
import styles from '../styles/PizzaCart.module.css'
import Image from 'next/image'
import Link from 'next/link'
const PizzaCart = () => {
  return (
    <div className={styles.container}> 
    <Link href='/product/123'>

      <Image src='/img/pizza.png' width='500' height='500' />
    </Link>
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quam.</p>
    </div>
  )
}

export default PizzaCart