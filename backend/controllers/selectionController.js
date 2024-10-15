const { SelectionModel } = require('../models/Selection')
const Listings = require('../models/Listings')

// Add a card to the selection
const addToSelection = async (req, res) => {
    const { cardId } = req.body
    try {
        // Check if the card is already in the selection
        const existingSelection = await SelectionModel.findOne({ cardId });
        if (existingSelection) {
            return res.status(400).json({ message: 'Selection already exists' });
        }
        // Add new card to the selection
        const newSelection = new SelectionModel({ cardId });
        await newSelection.save()
        res.status(201).json({ message: `Card added to selection` })
    } catch (err) {
        res.status(500).json({ error: `Error adding to selection ` })
    }
}

// Get all selected cards
const getSelection = async (req, res) => {
    try {

        const selections = await SelectionModel.find();

        const cardIds = selections.map(selection => selection.cardId);

        const selectedListings = await Listings.find({ _id: { $in: cardIds } })

        res.status(200).json(selectedListings)
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving selections' })
    }
}

// Delete a card from the selection
const deleteSelection = async (req, res) => {
    const { cardId } = req.params;
    try {
        const result = await SelectionModel.findOneAndDelete({ cardId: cardId })
        if (!result) {
            return res.status(400).json({ message: 'Selection not found' })
        }
        res.status(200).json({ message: "Selection removed succesfully" })
    } catch (error) {
        console.error("Error removing selection:", error);
        res.status(500).json({ message: "Server error" })
    }
}

module.exports = { addToSelection, getSelection, deleteSelection }