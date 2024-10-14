const { Router } = require('express')
const Listings = require('../models/Listings')

const router = Router()

router.get('/', async (req, res) => {
    const { filter } = req.query;
    console.log(`Filter: ${filter}`)
    try {
        if (filter) {
            const listings = await Listings.find({ price: { $lte: Number(filter) } });
            res.status(200).json(listings)
        }
        else {
            const listings = await Listings.find();
            res.status(200).json(listings)
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/', async (req, res) => {
    const { title, link, img_src, address, price } = req.body;

    const newListing = new Listings({
        title,
        link,
        img_src,
        address,
        price
    })

    try {
        const savedListing = await newListing.save();
        res.status(201).json(savedListing)
    } catch (err) { res.status(400).json({ message: err.message }) }
})

module.exports = router;



