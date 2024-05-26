import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoURI="mongodb+srv://sidsahil2001:EmqcF4XZQmXyIGPr@cluster.smankxs.mongodb.net/aubank"

export default mongoose.connect(mongoURI)
.then(()=>{
    console.log("CONNECTED TO THE DB")
})
.catch((err)=>{
    console.log("NOT CONNECTED!");
})