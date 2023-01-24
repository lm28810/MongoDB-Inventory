const router = require('express').Router();
let product = require('../Items.model')


router.route('/').get((req, res) => {
    product.find()
        .them(item => res.json(item))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const inventory = req.body.inventory;
    const deliveryDate = Date.parser(eq.body.deliveryDate);
    const deliveryPrice = req.body.deliveryPrice;
    const salesPrice = req.body.salesPrice;
    
    
    const newProduct = new Product({
        name,
        inventory,
        deliverDate,
        deliveryPrice,
        salesPrice
    })
    newUser.save()
        .then(() => res.json('user added'))
        .catch(err => res.status(400).json(`Error: ${err}`))
    
    //price: 2.00,x
    // inventory: 700,x
    // nextDelivery: Date,x
    // deliveryAmt: 200,x
    // name: "Toy Car"x
})
