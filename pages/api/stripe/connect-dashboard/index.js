const stripe = require("stripe")(process.env.STRIPE_API_SECRET)

const connectDashboard = async (req, res) => {
    const {method } = req;
    // if(req)
    if(method == "GET"){
        const {connectedStripeId} = req.query;

        const link  = await stripe.accounts.createLoginLink(connectedStripeId);
        res.status(200).json({url: link.url});
    }
}

export default connectDashboard;