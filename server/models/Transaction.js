import mongoose from 'mongoose';

// schema() is constructor method to create a new Schema class instance/object
const TransactionSchema = mongoose.Schema(
    {
        userId: String,
        cost: String,
        products: {
            type: [mongoose.Types.ObjectId],
            of: Number
        },
    },
    { timestamps : true } // this enables the timestamp feature for the schema to track the changes and modifications in the schema
);

// create the mongoose model
const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;