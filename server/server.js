const express = require('express');
const app = express();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
require("dotenv").config()


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors())

app.post("/payment". cors() async (req, res) => {
  let{amount, id} = req.body
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      curreny: "USD",
      description: "Sportsweb",
      Payment_method: id,
      confirm: true
    })
console.log("Payment", payment)
res.json({
  message: "Payment succesful",
  success: true
})

  } catch (error) {
    console.log("Error", error)
    res.json({
    message: "Payment failed",
    success: false
    })
  }
})

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);


// app.listen(process.env PORT || 3001, () =>{
//   console.log("Server is Listening")
// })

const PORT = process.env.PORT || 3001;
db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
