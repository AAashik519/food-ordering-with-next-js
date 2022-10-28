import React, { useState } from 'react'
import style from '../../styles/Product.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Product = () => {
    const [size , setSize]= useState(0)
    const Pizza ={
        id:1,
        img:'/img/pizza.png',
        name:"CAMPAGNOLA",
        price:[19.9 ,23.9, 27.9],
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet minima recusandae ea laudantium "
    };
  return (
    <div className={style.container}> 
        <div className={style.left}>
           <div className={style.imgContainer}>
            <Image src={Pizza.img} objectFit='contain' layout='fill'  alt=''/>
            </div> 
        </div>
        <div className={style.right}>
            <h1 className={style.title}>{Pizza.name}</h1>
            <span className={style.price}>${Pizza.price[size]}</span>
            <p className={style.desc}>{Pizza.desc}</p>
            <h3 className={style.choose}>Choose the Size</h3>

            <div className={style.sizes}>
              <div className={style.size} onClick={ ()=>setSize(0)}>
                    <Image src='/img/size.png' layout='fill' alt='pizza size' />
                    <span className={style.number}>Small</span>
                </div>
              <div className={style.size} onClick={ ()=>setSize(1)}>
                    <Image src='/img/size.png' layout='fill' alt='pizza size' />
                    <span className={style.number}>Medium</span>
                </div>
              <div className={style.size} onClick={ ()=>setSize(2)}>
                    <Image src='/img/size.png' layout='fill' alt='pizza size' />
                    <span className={style.number}>Large</span>
                </div>
            </div>

            <h3 className={style.choose}>Choose additional ingradients</h3>

            <div className={style.ingradients}>
                <div className={style.options}> 
                    <input
                     type="checkbox"
                     id='double' 
                     name='double'
                      className={style.checkbox} />
                      <label htmlFor="double"> Double Ingredients</label>
                </div>
                <div className={style.options}> 
                    <input
                     type="checkbox"
                     id='cheese' 
                     name='cheese'
                      className={style.checkbox} />
                      <label htmlFor="cheese">  Extra cheese  </label>
                </div>
                <div className={style.options}> 
                    <input
                     type="checkbox"
                     id='spicy' 
                     name='spicy'
                      className={style.checkbox} />
                      <label htmlFor="spicy">Spicy Sauce </label>
                </div>
                <div className={style.options}> 
                    <input
                     type="checkbox"
                     id='garlic' 
                     name='garlic'
                      className={style.checkbox} />
                      <label htmlFor="garlic">Garlic Sauce </label>
                </div>

            </div>


            <div className={style.add}>
                <input type="number" defaultValue={1}  className={style.quantity}/>
                <Link href='/cart'>
                <button className={style.button}>Add to Cart</button>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default  Product