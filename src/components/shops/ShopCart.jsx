

import React, { useState } from "react"

const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

//   return (
//     <>
//       {shopItems.map((shopItems, index) => {
//         return (
//           <div className='box'>
//             <h1>Shop Here</h1>
//           </div>
//         )
//       })}
//     </>
//   )
// }

export default ShopCart
