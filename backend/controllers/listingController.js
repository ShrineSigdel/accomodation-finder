const Listings = require('../models/Listings')

// Add new listing to the database
const addToListings = async (req, res) => {
    const { _id, title, link, img_src, address, price } = req.body;

    const newListing = new Listings({
        _id,
        title,
        link,
        img_src,
        address,
        price
    })

    try {
        const savedListing = await newListing.save();
        res.status(201).json(savedListing)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

//Get listings from the database
const getListings = async (req, res) => {
    const { filter } = req.query;
    try {
        let listings
        if (filter) {
            listings = await Listings.find({ price: { $lte: Number(filter) } });
        } else {
            listings = await Listings.find();
        }
        res.status(200).json(listings)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = { addToListings, getListings }