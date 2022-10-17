import React from 'react'
import styles from '../../styles/Order.module.css'
import Image from "next/image";
const  Order = () => {
    const status= 0;
    const  statusClassName=(index)=>{
        if(index-status <1 ) return styles.done
        if(index-status ===1 ) return styles.inprogress
        if(index-status >1 ) return styles.undone

    }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
            <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Address </th>
            <th>Total</th>
          </tr>
          <tr>
         
           
          <td>
            <span className={styles.id}> 123245242512</span>
          </td>
          <td>
            <span className={styles.name}>
               Al Amin Ashik
            </span>
          </td>
          <td>
            <span className={styles.address}> Khagan Bazer, Ashulia Savar</span>
          </td>
          <td>
            <span className={styles.total}>19.90</span>
          </td>
          </tr>
           
        </table>
            </div>
            <div className={styles.row}>
                <div className={ statusClassName(0)}>
                    <Image  src='/img/paid.png' width='30px' height='30px' alt='' />
                    <span>Payment</span>
                    <div className={styles.checkIcon}>
                    <Image className={styles.checkIcon} src='/img/checked.png' width='20px' height='20px' alt='' />
                    </div>
                </div>
                <div className={ statusClassName(1)}>
                    <Image src='/img/paid.png' width='30px' height='30px' alt='' />
                    <span>Preparing</span>
                    <div className={styles.checkIcon}>
                    <Image className={styles.checkIcon}  src='/img/checked.png' width='20px' height='20px' alt='' />
                    </div>
                </div>
                <div className={ statusClassName(2)}>
                    <Image src='/img/bike.png' width='30px' height='30px' alt='' />
                    <span>On the way</span>
                    <div className={styles.checkIcon}>
                    <Image className={styles.checkIcon}  src='/img/checked.png' width='20px' height='20px' alt='' />
                    </div>
                </div>
               
                <div className={ statusClassName(3)}>
                    <Image src='/img/paid.png' width='30px' height='30px' alt='' />
                    <span>Payment</span>
                    <div className={styles.checkIcon}>
                    <Image  className={styles.checkIcon}  src='/img/checked.png' width='20px' height='20px' alt='' />
                    </div>
                </div>
            </div>

        </div>









        <div className={styles.right}>
        <div className={styles.wrapper}>
                <h2 className={styles.title}> CART TOTAL</h2>
               
                
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal :</b> $79.60
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount :</b> $79.60
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total :</b> $79.60
                </div>

                <button className={styles.button}>PAID </button>
            </div>
        </div>

    </div>
  )
}

export default  Order











{/* <div className={styles.status}>
<Image src='/img/paid.png' width='30px' height='30px' alt='' />
<span>Payment</span>
<div className={styles.checkIcon}>
<Image src='/img/checked.png' width='20px' height='20px' alt='' />
</div>
</div>
<div className={styles.status}>
<Image src='/img/paid.png' width='30px' height='30px' alt='' />
<span>Preparing</span>
<div className={styles.checkIcon}>
<Image src='/img/checked.png' width='20px' height='20px' alt='' />
</div>
</div>
<div className={styles.status}>
<Image src='/img/bike.png' width='30px' height='30px' alt='' />
<span>On the way</span>
<div className={styles.checkIcon}>
<Image src='/img/delivered.png' width='20px' height='20px' alt='' />
</div>
</div>
<div className={styles.status}>
<Image src='/img/paid.png' width='30px' height='30px' alt='' />
<span>Payment</span>
<div className={styles.checkIcon}>
<Image src='/img/checked.png' width='20px' height='20px' alt='' />
</div>
</div> */}