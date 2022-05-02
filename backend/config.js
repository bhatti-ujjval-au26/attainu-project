import dotenv from 'dotenv';

dotenv.config();


export default {
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES: process.env.JWT_EXPIRES,
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
};  