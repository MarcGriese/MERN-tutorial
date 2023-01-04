const express = require('express')
const router = express.router()
const {} = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports = router