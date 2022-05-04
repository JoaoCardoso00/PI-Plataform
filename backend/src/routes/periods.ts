import express from 'express'
import PeriodController from '../controllers/PeriodController'

const router = express.Router()

router.get('/', PeriodController.index)
router.get('/:id', PeriodController.show)
router.post('/', PeriodController.store)
//router.put('/:id', PeriodController.update)
//router.delete('/:id', PeriodController.destroy)

export default router
