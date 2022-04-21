const { Invoice } = require('../models/index')
const midtransClient = require('midtrans-client');
const formatDate = require('../helpers/format-date')
    // Create Snap API instance
let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.YOUR_SERVER_KEY,
    clientKey: process.env.YOUR_CLIENT_KEY
});
let invoiceNum = ''
class Controller {
    static async payment(req, res, next) {
        try {
            const { amount } = req.body
            const orderId = `INV/${formatDate(new Date())}/${req.user.id}`
            invoiceNum = orderId
            let parameter = {
                "transaction_details": {
                    "order_id": orderId,
                    "gross_amount": amount
                },
                "credit_card": {
                    "secure": true
                }
            };
            const transactionToken = await snap.createTransaction(parameter)
                // console.log('transactionToken:', transactionToken);
            res.status(201).json({
                token: transactionToken
            })
        } catch (err) {
            console.log(err)
        }
    }

    static async listInvoice(req, res, next) {
        try {
            const id = req.user.id
            const listInvoice = await Invoice.findAll({
                where: {
                    UserId: id
                }
            })

            res.status(200).json(listInvoice)
        } catch (err) {
            next(err)
        }
    }

    static async createInvoice(req, res, next) {
        try {
            const id = req.user.id
            const { itemName, price, size, quantity } = req.body
            const newInvoice = await Invoice.create({
                itemName: itemName,
                price: price * quantity,
                size: +size,
                quantity: quantity,
                UserId: id,
                invoiceNumber: invoiceNum
            })

            res.status(201).json(newInvoice)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller