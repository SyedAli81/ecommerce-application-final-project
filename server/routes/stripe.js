Stripe.api_key = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'

post '/create-checkout-session' do
  session = Stripe::Checkout::Session.create({
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'T-shirt',
        },
        unit_amount: 2000,
      },
      quantity: 1,
    }],
    mode: 'payment',
    # These placeholder URLs will be replaced in a following step.
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  })

  redirect session.url, 303
end