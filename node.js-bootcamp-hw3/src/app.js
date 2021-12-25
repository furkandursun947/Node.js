const loaders = require("./loaders");
const config = require("./config");

const express = require("express");
const {UserRoutes, NpcRoutes} = require("./routes/index");


config();
loaders();



const app = express();
app.use(express.json());


app.listen(process.env.APP_PORT, ()=>{
    console.log(`Server is up and running.. ${process.env.APP_PORT}`);
    app.use("/users", UserRoutes);
    app.use("/npcs", NpcRoutes);
})