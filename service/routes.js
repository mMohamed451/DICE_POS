const express = require('express')
const router = express.Router()
const products = require("./products.js");
const orders = require("./orders.js");
const myLogger = function (req, res, next) {
    if (req.header('authorization')) {
        next()
    } else {
        res.status(401).json({
            data: {
                error: "unauthorized access",
            },
        });
    }
}
  
router.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === 'mostafa' && password === '123456') { // TODO: bcrypt and passport
        res.status(200).json({
            access_token: "asd123123123",
        });
    } else {
        res.status(401).json({
            data: {
                error: "unauthorized access",
            },
        });

    }
});

router.get("/product", myLogger, products.findAll);
router.post("/product",myLogger, products.submitProduct);
router.post("/order",myLogger, orders.submitOrder);

module.exports = router