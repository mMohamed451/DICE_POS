const mongoose = require('mongoose');
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose.connect(process.env.CONNECTION_STRING, connectionParams).then(() => {
    console.log("MongoDb connected wohoooo !");
}).catch((err) => {
    console.log(err);
    console.log("could not connect to database");

});