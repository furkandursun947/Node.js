const Mongoose = require("mongoose");



const UserSchema = new Mongoose.Schema(
    {
        nickname: String,
        email: String,
        password: String,
        isAdmin: Boolean
    },
    {timestamps: true, versionKey: false}
);


module.exports = Mongoose.model("User", UserSchema);