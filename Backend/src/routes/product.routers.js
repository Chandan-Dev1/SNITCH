import express from 'express'
const router = express.Router()
import {authenticateSeller} from '../middlewares/middleware.js'
import {createProduct,getSellerProducts,getAllProducts} from '../controllers/product.controller.js'
import {createProductValidator} from '../validator/product.validator.js'
import multer from 'multer'

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024 // 5 MB
    }
})

router.post("/",authenticateSeller, upload.array('images', 7),createProductValidator,createProduct)

/** 
 * @route GET /api/products/seller
 * @description Get all products of the authenticated seller
 * @access Private (Seller only)
 */
router.get("/seller", authenticateSeller, getSellerProducts)


/**
 * @route GET /api/products
 * @description Get all products
 * @access Public
 */
router.get("/", getAllProducts)


export default router



