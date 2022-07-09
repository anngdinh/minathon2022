const express = require("express");
let CategoryModel = require("../Model/CategoryModel");
class CategoryController {
  async createCategory(req, res) {
    const { name } = req.body;
    try {
      const newCategory = new CategoryModel({
        name: name,
      });
      await newCategory.save();
      res.send({ success: true, Category: newCategory });
    } catch (error) {
      console.log(error);
    }
  }
  async getCategory(req, res) {
    console.log(req.query.id);
    if (req.query.id !== undefined) {
      try {
        console.log("cc");
        await CategoryModel.findOne(
          { _id: req.query.id },
          function (err, CategoryModel) {
            if (err) {
              console.log(err);
              res.json({ message: `ID: ${req.query.id} not found` });
            } else {
              console.log(CategoryModel);
              res.json(CategoryModel);
            }
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await CategoryModel.find(function (err, CategoryModel) {
          if (err) {
            console.log(err);
          } else {
            // console.log(typeof account);
            res.json(CategoryModel);
          }
        })
          .clone()
          .catch(function (err) {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }
}
module.exports = new CategoryController();
