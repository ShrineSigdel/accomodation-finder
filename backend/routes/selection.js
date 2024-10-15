const { Router } = require('express')
const { addToSelection, getSelection } = require('../controllers/selectionController')

const router = Router()

//Route to add  a card to selection
router.post('/add', addToSelection);

//Route to retrieve selections
router.get('/', getSelection)

module.exports = { router }