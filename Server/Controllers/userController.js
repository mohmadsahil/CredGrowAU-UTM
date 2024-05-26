import {User} from "../Models/userModels.js";

export const createUser = async(req,res)=>{
    const {name , number} = req.body;

    try {
            if(number.length === 10){
                const userData = new User({name:name , number:number})
                const savedData =  await userData.save();   // Data will save into DB
                return res.status(200).json(savedData)
             }
             else{
                res.send("Kindly Enter The Correct Number");
             }
            

    } catch (error) {
            res.status(500).json({error : error});
    }
}
