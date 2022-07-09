const express = require("express");
let TransitionModel = require("../Model/TransitionModel");
class TransitionController {
  async createTransition(req, res) {
    const { productId, userIdReceive } = req.body;
    try {
      const newTransition = new TransitionModel({
        productId: productId,
        userIdReceive: userIdReceive,
        date: new Date(),
      });
      await newTransition.save();
      res.send({ success: true, Transition: newTransition });
    } catch (error) {
      console.log(error);
    }
  }
  async getTransition(req, res) {
    console.log(req.query.id);
    if (req.query.id !== undefined) {
      try {
        console.log("cc");
        await TransitionModel.find(
          { userIdReceive: req.query.id },
          function (err, TransitionModel) {
            if (err) {
              console.log(err);
              res.json({ message: `ID: ${req.query.id} not found` });
            } else {
              console.log(TransitionModel);
              res.json(TransitionModel);
            }
          }
        )
          .populate({
            path: "productId",
            populate: {
              path: "userId",
              model: "User",
            },
          })
          .populate("userIdReceive");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await TransitionModel.find(function (err, TransitionModel) {
          if (err) {
            console.log(err);
            throw err;
          } else {
            // console.log(typeof account);
            res.json(TransitionModel);
          }
        })
          .populate({
            path: "productId",
            populate: {
              path: "userId",
              model: "User",
            },
          })
          .populate("userIdReceive", "name")
          .clone()
          .catch(function (err) {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }
  // async getSingleTransition(req, res) {
  //   console.log(req.query);
  //   try {
  //     const id = req.params.id;
  //     TransitionModel.findOne({ _id: id }, function (err, TransitionModel) {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         // console.log(typeof account);
  //         res.json(TransitionModel);
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  //   async updateTransition(req, res) {
  //     try {
  //       // console.log(req.body);
  //       const id = req.query.id;
  //       const {
  //         name,
  //         phone,
  //         numReceive,
  //         numGive,
  //         Transitionname,
  //         password,
  //         point,
  //       } = req.body;

  //       let updateTransition = await TransitionModel.findOneAndUpdate(
  //         { _id: id },
  //         {
  //           name: name,
  //           phone: phone,
  //           numReceive: numReceive,
  //           numGive: numGive,
  //           Transitionname: Transitionname,
  //           password: password,
  //           point: point,
  //         },
  //         { new: true }
  //       );
  //       if (!updateTransition) {
  //         res.status(401).json({ success: false, msg: "Transition not found" });
  //       }
  //       res.send({
  //         success: true,
  //         Transition: updateTransition,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //       res.json({ message: "Error" });
  //     }
  //   }
  // test(req, res) {
  //   res.send({ succes: "cc" });
  // }

  async getGive(req, res) {
    try {
      console.log("cc");
      await TransitionModel.find(
        { "productId.userId._id": req.query.id },
        function (err, TransitionModel) {
          if (err) {
            console.log(err);
            res.json({ message: `ID: ${req.query.id} not found` });
          } else {
            console.log(TransitionModel);
            res.json(TransitionModel);
          }
        }
      )
        .populate({
          path: "productId",
          populate: {
            path: "userId",
            model: "User",
          },
        })
        .populate("userIdReceive")
        .find({
          "productId.userId._id": req.query.id,
        })
        .clone();
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new TransitionController();
