import React from "react"
import Catg from "../components/shops/Catg"
import ShopCart from "../components/shops/ShopCart"
import "./style.css"

const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className='shop background'>
        <h1>Shop Here</h1>
        <div>
          <h2>Hoodies</h2>
        </div>
      </section>
    </>
  )
}

export default Shop
