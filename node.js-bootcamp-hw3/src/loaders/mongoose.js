const mongoose = require('mongoose');
const db = mongoose.connection;

db.once("open", () => {
    console.log("Mongo db ye bağlandı..");
});


const connectDB = async () => {
    const {DB_HOST, DB_PORT, DB_NAME} = process.env;
    await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};


module.exports = {
    connectDB,
}