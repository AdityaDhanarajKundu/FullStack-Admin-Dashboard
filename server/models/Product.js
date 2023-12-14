// file to create the mongoose schema for the user model in our Mongo Database
import mongoose from 'mongoose';

// schema() is constructor method to create a new Schema class instance/object
const ProductSchema = mongoose.Schema(
    {
        name : String,
        price : Number,
        description : String,
        category : String,
        rating : Number,
        supply : Number,
    },
    { timestamps : true } // this enables the timestamp feature for the schema to track the changes and modifications in the schema
);

// create the mongoose model
const Product = mongoose.model("Product", ProductSchema);

export default Product;