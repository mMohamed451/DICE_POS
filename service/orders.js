const Order = require('./models/order');

// get all orders.
exports.findAll = (req, res) => {
    Order.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving products."
            });
        });
};

// submit an order
exports.submitOrder = async (req, res) => {
    await Order.create(req.body).then((order) => {
        res.status(200).json({
            message: 'Order Created successfully',
            document: order
        });
    })
        .catch((err) => {
            return res.status(404).json({
                'message': err.message
            });
        });
};