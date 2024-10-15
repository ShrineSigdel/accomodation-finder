const { Router } = require('express')
const { addToSelection, getSelection, deleteSelection } = require('../controllers/selectionController')

const router = Router()

// Route to add a selection
router.post('/add', addToSelection);

// Route to get all selections
router.get('/', getSelection)

// Route to delete a selection by cardId
router.delete('/:cardId', deleteSelection)

module.exports = router