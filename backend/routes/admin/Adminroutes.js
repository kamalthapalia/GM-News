const express = require("express");
const router = express.Router();
const blog = require("../../models/Blogmodels");

router.post("/blogs", async (req, res) => {
  try {
    const x = await blog.create(req.body);
    res.json(x);
  } catch (error) {
    //   const errorObject = error.message;

    //   Object.keys(error.errors).forEach((field) => {
    //     errorObject[field] = error.errors[field].message;
    //   });

    // const errorArray = [];

    // Object.keys(error.errors).forEach((field) => {
    //   errorArray.push(error.errors[field].message);
    // });

    // const errorMessage = { message: errorArray };

    res.status(500).json({ message: error.message });
  }
});
router.get("/blogs", async (req, res) => {
  try {
    const allProducts = await blog.find({});
    res.send(allProducts);
  } catch (error) {
    res.send("error lol");
  }
});

module.exports = router;
