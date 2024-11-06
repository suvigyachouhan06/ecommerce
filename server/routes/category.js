const Category = require("../models/category");
const express=require('express')
const router =express.Router();
const cloudinary= require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.cloudinary_Config_Cloud_Name,
    api_key: process.env.cloudinary_Config_api_key,
    api_secret:process.env.cloudinary_Config_api_secret,
    });

router.get('/',async(req,res)=>{
    try{ const categoryList= await Category.find();

        if (!categoryList || categoryList.length === 0) {
            return res.status(404).json({ success: false, message:"No categories found"});
        }

        res.status(200).json(categoryList);
        
    } catch (error) {
       
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

router.post('/create', async (req, res) => {
    try {
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

        let category = new Category({
            name: req.body.name,
            images: imgUrl,
            color: req.body.color
        });

        category = await category.save();
        res.status(201).json(category);
    } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).json({
            success: false,
            message: error.message || "Server error"
        });
    }
});

router.get('/:id',async(req,res) => {
    try{const category = await Category.findById(req.params.id);
    if(!category){
        res.status(500).json({message:"The category with the given ID was not found"})
    }
    return res.status(200).send(category);
}catch(error){
    console.error("Error creating category:", error);
    res.status(500).json({
        success: false,
        message: error.message || "Server error"
    });
}
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await Category.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "Category not found", success: false });
        }
        res.status(200).json({ success: true, message: "Category Deleted" });
    } catch (error) {
        console.error("Error deleting category:", error); // Log the error
        res.status(500).json({ success: false, message: "Server error" });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const imgUrl = [];
        if (req.body.images) {
            const pLimit = await import('p-limit').then(module => module.default);
            const limit = pLimit(2);

            const imagesToUpload = req.body.images.map((image) => {
                return limit(async () => {
                    try {
                        const result = await cloudinary.uploader.upload(image);
                        return result.secure_url; 
                    } catch (uploadError) {
                        console.error("Image upload error:", uploadError);
                        throw new Error("Image upload failed");
                    }
                });
            });

            imgUrl.push(...await Promise.all(imagesToUpload));
        }

        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                images: imgUrl.length > 0 ? imgUrl : req.body.images,
                color: req.body.color
            },
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found", success: false });
        }

        res.status(200).json(updatedCategory);
    } catch (error) {
        console.error("Error updating category:", error);
        res.status(500).json({
            success: false,
            message: error.message || "Server error"
        });
    }
});


module.exports = router;  