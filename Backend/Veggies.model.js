const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const veggieSchema = new Schema({
    Veggie: {
        name: String,
        inventory: Number,
        nextDelivery: Date,
        deliveryAmt: Number,
        price: Number,
}
})
const Veggies = mongoose.model('Veggie', veggieSchema)

module.exports = Veggies