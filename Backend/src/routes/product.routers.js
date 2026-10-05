import express from 'express'
const router = express.Router()
import {authenticateSeller} from '../middlewares/middleware.js'
import {createProduct} from '../controllers/product.controller.js'
import multer from 'multer'

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024 // 5 MB
    }
})

router.post("/",authenticateSeller, upload.array('images', 7),createProduct)

export default router



