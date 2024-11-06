const { Category } = require('../models/category');
const { Product } = require('../models/products');
const express = require('express');
const router = express.Router();
const cloudinary= require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.cloudinary_Config_Cloud_Name,
    api_key: process.env.cloudinary_Config_api_key,
    api_secret:process.env.cloudinary_Config_api_secret,
    });


router.get('/', async (req, res) => {
    try {
        const productList = await Product.find().populate('category');
        res.status(200).json(productList);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});


router.post('/create', async (req, res) => {
    try {
        const category = await Category.findById(req.body.category);
        if (!category) {
            return res.status(404).json({ success: false, message: "Invalid category" });
        }

        const pLimit = await import('p-limit').then(module => module.default);
        const limit = pLimit(2);

        const imagesToUpload = req.body.images.map((image) => {
            return limit(async () => {
                try {
                    const result = await cloudinary.uploader.upload(image);
                    return result; 
                } catch (uploadError) {
                    console.error("Image upload error:", uploadError);
                    throw new Error("Image upload failed");
                }
            });
        });

        const uploadStatus = await Promise.all(imagesToUpload);

        const imgUrl = uploadStatus.map((item) => item.secure_url);


        let product = new Product({
            name:req.body.name,
            description:req.body.description,
            images:imgUrl,
            brand:req.body.brand,
            price:req.body.price,
            category:req.body.category,
            countInStock:req.body.countInStock,
            rating:req.body.rating,
            numReviews:req.body.numReviews,
            isFeatured:req.body.isFeatured,
            dateCreated:req.body.dateCreated
            
        });
        product = await product.save();

        res.status(201).json({ success: true, product });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await Product.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "Product not found", success: false });
        }
        res.status(200).json({ success: true, message: "Product Deleted" });
    } catch (error) {
        console.error("Error deleting Product:", error); 
        
        res.status(500).json({ success: false, message: "Server error" });
    }
});

module.exports = router;
