const stripe = require('stripe')();

exports.payment = async (req, res) => {
  await stripe.charges.create({
    source: req.body.tokenId,
    amount: req.body.amount,
    currency: "cad"
  },{
    // api_key: process.env.STRIPE_SECRET_KEY
    apiKey: process.env.STRIPE_SECRET_KEY
  }, (stripeError, stripeResponse) => {
    if(stripeError){
      console.log(stripeError)
      res.status(500).json(stripeError)
    }else{
      res.status(200).json(stripeResponse)
    }
  });
};
