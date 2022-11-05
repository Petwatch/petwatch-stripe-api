const stripe = require("stripe")(process.env.STRIPE_API_SECRET)

/* 
    Request params for this api: 
        - customer_id -> this is if they already have a stripe account associated with them.
        Ok on second though this API is out of scope for now. 
        If we have time we will add this, this is just to save payment methods. 
*/

const getCustomer = async (req, res) => {
    const { method } = req;
    console.log(req.query.customerId);

    if(method === "GET"){
        if(req.query.customerId){
            console.log("customer exists");
        }
        res.status(200).json({test: "hello"});
    }
}

export default getCustomer