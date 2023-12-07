// file to create the mongoose schema for the user model in our Mongo Database
import mongoose from 'mongoose';

// schema() is constructor method to create a new Schema class instance/object
const UserSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            min : 3,
            max : 100,
        },
        email : {
            type : String,
            required : true,
            max : 50,
            unique : true,
        },
        password : {
            type : String,
            required : true,
            min : 5,
        },
        city : String,
        state : String,
        country : String,
        occupation : String,
        phoneNumber : String,
        transactions : Array,
        role : {
            type : String,
            enum : ["user", "admin", "superadmin"],
            default : "admin",
        },
    },
    { timestamps : true } // this enables the timestamp feature for the schema to track the changes and modifications in the schema
);

// create the mongoose model
const User = mongoose.model("User", UserSchema);

export default User;