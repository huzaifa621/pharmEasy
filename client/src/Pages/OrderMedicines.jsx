import React from 'react'
import styles from "../Styles/OrderMedicine.module.css"

import Select from 'react-select'
// import AsyncSelect from 'react-select/async'
import Creatable, { useCreatable } from 'react-select/creatable'
import { useState } from 'react'

// import Creatable from 'react-select/creatable';


const options = [
  { value: 'abc', label: 'def' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const OrderMedicines = () => {

 const[val,setVal] = useState("")

 console.log(val.value,"val")


  return (
    <div>
      <div className={styles.maindiv}>
        <div className={styles.top_1}>
          <p>Home  Order Medicines Online</p>
        </div>
        <div className={styles.order_div}>
          <div className={styles.left_div}>
            <div>
          <h2>Order Medicines Online</h2>
          <div className={styles.left_div2}>
            <div>
            <div className={styles.flex_1}>
              <p>Flat 15% Off</p>
              <p>1 Lakh+ Products</p>
              <p>Easy Returns</p>
            </div >
              <h4>Search for Medicines / Healthcare Products</h4>
              </div>
              <div className={styles.select}>
              <Creatable onChange={(values) => setVal(values)} placeholder="Search medicines/Healthcare products" svg="" options={ options} />
              </div>
            </div>
          </div>
          </div>
          <div className={styles.right_div}></div>
        </div>
        <div className={styles.slider_1}></div>
        <div className={styles.slider_2}></div>
        <div className={styles.slider_3}></div>
        <div className={styles.desc}></div>
        <div className={styles.faq}></div>
        <div className={styles.bottom_1}></div>
        <div className={styles.bottom_2}></div>
      </div>
    </div>
  )
}

export default OrderMedicines
