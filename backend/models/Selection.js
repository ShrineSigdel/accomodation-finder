const mongoose = require('mongoose')

const selectionSchema = new mongoose.Schema({
    cardId: {
        type: String,
        required: true
    }
})

const SelectionModel = mongoose.model('Selection', selectionSchema)
module.exports = { SelectionModel }