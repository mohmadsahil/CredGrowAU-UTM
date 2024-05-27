import express from "express";
import "./DB/connections.js";
import dotenv from "dotenv";
import cors from "cors";
import router from "./Routes/userRouters.js";
import path from "path";

const PORT=8000

dotenv.config();
const app = express();

//All Project will run on the one server only

app.use(express.json());
const _dirname = path.dirname("")
const buildpath = path.join(_dirname,"../Client/build")
app.use(express.static(buildpath));

//Solving Cors Error

app.use(cors({
    origin: "*",
}));

app.use(router);

app.listen(PORT,()=>{
    console.log(`App is Listening on PORT ${PORT}`);
})
