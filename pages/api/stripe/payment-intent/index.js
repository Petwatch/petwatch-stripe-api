const stripe = require("stripe")(process.env.STRIPE_API_SECRET)
const host = process.env.NEXT_PUBLIC_HOST
const appFee = process.env.STRIPE_APP_FEE

const paymentIntent = async (req, res) => {
  const {
    account_id: accountId,
    amount,
  } = req.query;

  //Would be good to make customer creation optional, if we want to save customer credit card info for later use. 
  // 
  const customer = req.query.customer ?? await stripe.customers.create();
    const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id ?? customer},
    {apiVersion: '2022-08-01'}
  );
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount)*100,
    currency: "usd",
    customer: customer.id ?? customer,
    automatic_payment_methods: {
      enabled: true,
    },
    setup_future_usage: "on_session",
    application_fee_amount: appFee * 100,
    // line_items: [
    //   {
    //     name: "test",
    //     /**
    //      * Multiplying by 100 because otherwise for example,
    //      * 149 becomes 1.49 on Stripe
    //      */
    //     amount: Math.round(amount) * 100,
    //     currency,
    //     quantity,
    //   },
    // ],
    transfer_data: {
      destination: accountId,
    },
    // payment_intent_data: {
    //   /**
    //    * Multiplying by 100 because otherwise for example,
    //    * 149 becomes 1.49 on Stripe
    //    */
      
    // },
    // // mode: "payment",
    // success_url: `${host}/pay-out${mobile ? "-mobile" : ""}?result=success`,
    // cancel_url: `${host}/pay-out${mobile ? "-mobile" : ""}?result=failure`,
  })
  res.status(200).json({ paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id ?? customer,
    publishableKey: "pk_test_51LumtJJVJnx1h9JWy7XlZr7eutUu5FzaUtbLKrTwReTve1faSYJhkiUDO0lbsoDdzogCIepksB8AyaU3wgKy50wr00UuVZVwMq"})
}

export default paymentIntent
