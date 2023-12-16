// file to create the mongoose schema for the user model in our Mongo Database
import mongoose from 'mongoose';

// schema() is constructor method to create a new Schema class instance/object
const ProductStatSchema = mongoose.Schema(
    {
        productId : String,
        yearlySalesTotal : Number,
        yearlyTotalSoldUnits : Number,
        year : Number,
        monthlyData : [
            {
                month: String,
                totalSales: Number,
                totalUnits: Number,
            }
        ],
        dailyData : {
            data: String,
            totalSales: Number,
            totalUnits: Number,
        },
    },
    { timestamps : true } // this enables the timestamp feature for the schema to track the changes and modifications in the schema
);

// create the mongoose model
const ProductStat = mongoose.model("ProductStat", ProductStatSchema);

export default ProductStat;