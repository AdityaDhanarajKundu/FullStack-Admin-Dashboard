import User from "../models/User.js";

export async function getAdmin(req, res){
    try{
        const admins = await User.find({role: "admin"}).select("-password");
        res.status(200).json(admins);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}