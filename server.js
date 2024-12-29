const express = require('express');
const cors = require('cors');
const connectDB = require('./db/dbConfig')
const customerController = require('./routes/customerController')
const orderController = require('./routes/orderController');
const bodyparser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/customer',customerController);
app.use('/order',orderController);

//Test commit


const PORT = process.env.PORT||3000;

app.get('/',(req,res)=>{
    res.send('hi');
})

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server started on port ${PORT}`);
    })
});