import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";
import getCountryIso3 from "country-iso-2-to-3";

export async function getProducts(req, res) {
  try {
    const products = await Product.find();

    // grabbing the product stats
    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({ product: product._id });
        return { ...product._doc, stat };
      })
    );

    res.status(200).json(productsWithStats); // show the products stats upon get request response and the set the get request response status as 200
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function getCustomers(req, res) {
  try {
    const customers = await User.find({ role: "user" }).select("-password");
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function getTransactions(req, res) {
  try {
    // client side pagination

    // sort should look like this: { "field": "userId", "sort": "desc"}
    const { page = 1, pageSize = 10, sort = null, search = "" } = req.query;

    // formatted sort should look like { userId: -1 }
    function generateSort() {
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: sortParsed.sort === "asc" ? 1 : -1,
      };
      return sortFormatted;
    }
    const sortFormatted = Boolean(sort) ? generateSort() : null;

    const transactions = await Transaction.find({
      $or: [
        { cost: { $regex: new RegExp(search, "i") } },
        { userId: { $regex: new RegExp(search, "i") } },
      ],
    })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

    // to display the complete transaction data so that it doesnt get affected by pagination
    const total = await Transaction.countDocuments({
        name: {$regex: search, $options: "i"}
    }); 

    res.status(200).json({ transactions, total});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const getGeography = async (req, res) => {
  try {
    const users = await User.find();

    const mappedLocations = users.reduce((acc, { country }) => {
      const countryISO3 = getCountryIso3(country);
      if (!acc[countryISO3]) {
        acc[countryISO3] = 0;
      }
      acc[countryISO3]++;
      return acc;
    }, {});

    const formattedLocations = Object.entries(mappedLocations).map(
      ([country, count]) => {
        return { id: country, value: count };
      }
    );

    res.status(200).json(formattedLocations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};