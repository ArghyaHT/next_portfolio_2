import { instance } from "../server.js"
import crypto from "crypto";
import { Payment } from "../models/paymentModel.js";

export const checkout = async (req, res) => {

    const options = {
        amount: Number(req.body.amount * 100),
        currency: "INR"
    };

    const order = await instance.orders.create(options)

    res.status(200).json({
        success: true,
        order
    })
}

export const paymentverification = async (req, res) => {


console.log(req.body)

const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature

    if(isAuthentic){
        //Data base save

        await Payment.create({
            razorpay_order_id,
            razorpay_signature,
            razorpay_payment_id
        })
        res.redirect(`http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`)
    }else{
        res.status(200).json({
            success:false
        })
    }

    console.log("sign received", razorpay_signature)
    console.log("sig generated", expectedSignature)

  
}