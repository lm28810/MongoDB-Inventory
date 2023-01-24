const router = require('express').Router();
const Product = require('../Items.model');



router.route('/').get((req, res) => {
    Product.find()
        .them(item => res.json(item))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const inventory = req.body.inventory;
    const deliveryDate = Date.parser(eq.body.deliveryDate);
    const deliveryPrice = req.body.deliveryPrice;
    const salesPrice = req.body.salesPrice;
}
    
    const newProduct = new Product({
        name,
        inventory,
        deliverDate,
        deliveryPrice,
        salesPrice
    })

//     router.route('/:id').get((req, res) => {
//   Product.findById(req.params.id)
//     .then(item => res.json(item))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').delete((req, res) => {
//   Product.findByIdAndDelete(req.params.id)
//     .then(() => res.json('Exercise deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//   Product.findById(req.params.id)
//       .then(exercise => {
//           Product.username = req.body.username;
//           Product.description = req.body.description;
//           Product.duration = Number(req.body.duration);
//           Product.date = Date.parse(req.body.date);
      
//     newUser.save()
//         .then(() => res.json('user added'))
//         .catch(err => res.status(400).json(`Error: ${err}`))
    
//     //price: 2.00,x
//     // inventory: 700,x
//     // nextDelivery: Date,x
//     // deliveryAmt: 200,x
//     // name: "Toy Car"x
// })

    module.exports = router;