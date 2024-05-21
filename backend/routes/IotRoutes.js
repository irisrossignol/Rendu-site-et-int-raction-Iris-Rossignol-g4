import express from 'express'
import { getHouse } from '../controllers/IotController.js'

const router = express.Router();

router.get('/iot', getHouse)

export default router;