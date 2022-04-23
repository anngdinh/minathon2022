const express = require("express");
let ProductModel = require("../Model/ProductModel");
class ProductController {
  async createProduct(req, res) {
    console.log("path", `http://localhost:5000/${req.file.path}`);
    const { categoryId, img, description, title, userId, amount } = req.body;
    try {
      const newProduct = new ProductModel({
        categoryId: categoryId,
        img: [`http://localhost:5000/${req.file.path}`],
        description: description,
        title: title,
        userId: userId,
        amount: amount,
      });
      await newProduct.save();
      res.send({ success: true, Product: newProduct });
    } catch (error) {
      console.log(error);
    }
  }
  async getProduct(req, res) {
    console.log(req.query.id);
    if (req.query.id !== undefined) {
      try {
        console.log("cc");
        await ProductModel.findOne(
          { _id: req.query.id },
          function (err, ProductModel) {
            if (err) {
              console.log(err);
              res.json({ message: `ID: ${req.query.id} not found` });
            } else {
              console.log(ProductModel);
              res.json(ProductModel);
            }
          }
        ).populate("categoryId", "name");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await ProductModel.find(function (err, ProductModel) {
          if (err) {
            console.log(err);
          } else {
            // console.log(typeof account);
            res.json(ProductModel);
          }
        })
          .populate("categoryId", "name")
          .clone()
          .catch(function (err) {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }
  // async getSingleProduct(req, res) {
  //   console.log(req.query);
  //   try {
  //     const id = req.params.id;
  //     ProductModel.findOne({ _id: id }, function (err, ProductModel) {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         // console.log(typeof account);
  //         res.json(ProductModel);
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async updateProduct(req, res) {
    try {
      console.log(req.query);
      const id = req.query.id;
      const { categoryId, img, description, title, userId, amount } = req.body;

      let updateProduct = await ProductModel.findOneAndUpdate(
        { _id: id },
        {
          categoryId: categoryId,
          img: img,
          description: description,
          title: title,
          userId: userId,
          amount: amount,
        },
        { new: true }
      );
      if (!updateProduct) {
        res.status(401).json({ success: false, msg: "Product not found" });
      }
      res.send({
        success: true,
        Product: updateProduct,
      });
    } catch (error) {
      console.log(error);
      res.json({ message: "Error" });
    }
  }
  // test(req, res) {
  //   res.send({ succes: "cc" });
  // }
}
module.exports = new ProductController();
