
const { SelectionModel } = require('../models/Selection')

// Add a card ID to the selection
const addToSelection = async (req, res) => {
    const { cardId } = req.body
    try {
        const newSelection = new SelectionModel({ cardId });
        await newSelection.save()
        res.status(201).json({ message: `Card added to selection` })
    } catch (err) {
        res.status(500).json({ error: `Error adding to selection ` })
    }
}

//Get all selected card IDs
const getSelection = async (req, res) => {
    try {
        const selections = await SelectionModel.find();
        res.status(200).json(selections);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving selections' })
    }
}



module.exports = { addToSelection, getSelection }