require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./model') 
const router = require('./routes')  
const cors = require('cors');


const PORT = process.env.PORT || 5002

 
const app = express()
app.use(express.json())
app.use(cors());
app.use('/api', router)
 


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Все работает, порт: ${PORT}`))
    }catch (e) {
        console.log(e)
    }
}
start()
