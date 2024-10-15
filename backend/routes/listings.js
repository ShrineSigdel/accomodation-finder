const { Router } = require('express')
const { addToListings, getListings } = require('../controllers/listingController')

const router = Router()

// Route to get all listings
router.get('/', getListings)

// Route to add a new listing
router.post('/', addToListings)

module.exports = router;

