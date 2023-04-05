const express = require("express");
const app = express();
const dotenv=require("dotenv")
const userRoutes=require("./router/userRoutes")
const authRoutes=require("./router/auth")
const cors = require("cors");
const cookieParser = require('cookie-parser')

dotenv.config()
require("./Database/connection/connection")

var host="192.168.0.154"

const corsOption={
  origin: true, credentials: true, exposedHeaders: ["set-cookie"], 
}
const port=5000

app.use(cors(corsOption))
app.use(cookieParser())
app.use(express.json())

app.use("/api/users",userRoutes )
app.use("/api/auth",authRoutes)




app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});