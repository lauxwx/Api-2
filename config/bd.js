const mongoose = require("mongoose");
const conectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017/recetaDB")
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.log("Error: " + error)
        process.exit(1);
    }
}
module.exports ={conectDB};






  