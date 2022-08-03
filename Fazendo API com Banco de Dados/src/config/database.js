const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI
const connect = async () => {
        try {
            await mongoose.connect("mongodb+srv://nayara:ahRy6DOxfPI7zFta@cluster0.gyfsdmw.mongodb.net/?retryWrites=true&w=majority", {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            console.log("Conectado a DataBase")
        } catch (error) {
            console.error("Erro: ", error.message)
        }
    }
    module.exports = {
        connect
    }
    

 
