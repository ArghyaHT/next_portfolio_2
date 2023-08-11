import { app } from './app.js'
import Razorpay from 'razorpay'
import { connectDB } from './config/db.js'

connectDB()

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY_ID,
    key_secret: process.env.RAZORPAY_API_KEY_SECRET,
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT:${process.env.PORT}`)
})