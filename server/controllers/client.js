import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js";

export async function getProducts(req, res) {
    try{
        const products = await Product.find();

        // grabbing the product stats
        const productsWithStats = await Promise.all(products.map(async (product) => {
            const stat = await ProductStat.find({ product: product._id });
            return { ...product._doc, stat };
        }));

        res.status(200).json(productsWithStats); // show the products stats upon get request response and the set the get request response status as 200
    }
    catch(error){
        res.status(404).json({ message : error.message });
    }
}

export async function getCustomers(req, res){
    try{
        const customers = await User.find({role: "user"}).select("-password");
        res.status(200).json(customers);
    }
    catch(error){
        res.status(404).json({ message : error.message });
    }
}