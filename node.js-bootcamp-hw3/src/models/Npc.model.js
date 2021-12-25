const Mongoose = require("mongoose");


const NpcSchema = new Mongoose.Schema(
    {
        name: String,
        hitpoints: String,
        shield: String,
        damage: String,
        speed: String,
        points: {
            temp: String,
            perma: String,
        },
        rewards: {
            btc: String,
            plt: String,
            xp: String,
            hnr: String
        }
    },
    {timestamps: true, versionKey: false}
);

module.exports = Mongoose.model("Npc", NpcSchema);

