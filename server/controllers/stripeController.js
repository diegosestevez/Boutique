const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.payment = (req, res) => {
  stripe.charges.create({
    source: req.body.tokenId,
    amount: req.body.amount,
    currency: "cad"
  }, (stripeError, stripeResponse) => {
    if(stripeError){
      res.status(500).json(stripeError)
    }else{
      res.status(200).json(stripeResponse)
    }
  });
};
