import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import StripeContainer from './components/StripeContainer';
import MyHeader from './components/SignUp/MyHeader'
import RegestrationForm from './components/SignUp/RegestrationForm'

function App() {
  const [showItem, setShowItem] = useState(false);


  //Step 1 :
  const { productItems } = Data
  const { shopItems } = Sdata

  //Step 2 :
  const [CartItem, setCartItem] = useState([])

  //Step 4 :
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
  
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  // Stpe: 6
  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

   
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {

      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
          <Route path='/user' exact>
            <MyHeader />
            <RegestrationForm />
          </Route>
        </Switch>
        <Footer />
      </Router>
      
    </>
    
  )
}
// function Stripe() {
// 	const [showItem, setShowItem] = useState(false);
// 	return (
// 		<div className='Stripe'>
// 			<h1>Sports Web</h1>
// 			<h2>Checkout</h2>

// 			{showItem ? (
// 				<StripeContainer />
// 			) : (
// 				<>
// 					<h3>$10.00</h3>
// 					<button onClick={() => setShowItem(true)}>Purchase</button>
// 				</>
// 			)}
// 		</div>
// 	);
// }

export default App
