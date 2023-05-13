import { loadStripe } from "@stripe/stripe-js"
import React from 'react'
import PaymentForm from './PaymentForm'
import { Elements } from "@stripe/react-stripe-js"



const PUBLIC_KEY = "pk_test_51N6jExDVXifGVRVqld3iYBXQNJoeKbEezmSo037wBbIFmlXeNqjwxujRyApOYsAIjma2J2qZgEaWJZ93T4mGpv7R00A1ZMSC0y"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm />
    </Elements>
  )
}
