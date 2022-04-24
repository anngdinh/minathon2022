const express = require("express");
let UserModel = require("../Model/UserModel");
class UserController {
  async createUser(req, res) {
    console.log(req.body);
    const { name, phone, username, password } = req.body;
    try {
      const newUser = new UserModel({
        name: name,
        phone: phone,
        numReceive: 0,
        numGive: 0,
        username: username,
        password: password,
        point: 0,
      });
      await newUser.save();
      res.send({ success: true, user: newUser });
    } catch (error) {
      console.log(error);
    }
  }
  async getUser(req, res) {
    console.log(req.query.id);
    if (req.query.id !== undefined) {
      try {
        console.log("cc");
        await UserModel.findOne(
          { _id: req.query.id },
          function (err, UserModel) {
            if (err) {
              console.log(err);
              res.json({ message: `ID: ${req.query.id} not found` });
            } else {
              console.log(UserModel);
              res.json(UserModel);
            }
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await UserModel.find(function (err, UserModel) {
          if (err) {
            console.log(err);
            throw err;
          } else {
            // console.log(typeof account);
            res.json(UserModel);
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

  async findUser(req, res) {
    try {
      const { username, password } = req.body;
      // console.log("cc");
      await UserModel.findOne(
        { username: username, password: password },
        function (err, UserModel) {
          if (err) {
            console.log(err);
            res.json({ message: `ID: ${req.query.id} not found` });
          } else {
            console.log(UserModel);
            res.json({ success: true, user: UserModel });
          }
        }
      ).clone();
    } catch (error) {
      console.log(error);
      res.json({ success: "??", user: UserModel });
    }
  }
  // async getSingleUser(req, res) {
  //   console.log(req.query);
  //   try {
  //     const id = req.params.id;
  //     UserModel.findOne({ _id: id }, function (err, UserModel) {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         // console.log(typeof account);
  //         res.json(UserModel);
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async updateUser(req, res) {
    try {
      // console.log(req.body);
      const id = req.query.id;
      const { name, phone, numReceive, numGive, username, password, point } =
        req.body;

      let updateUser = await UserModel.findOneAndUpdate(
        { _id: id },
        {
          name: name,
          phone: phone,
          numReceive: numReceive,
          numGive: numGive,
          username: username,
          password: password,
          point: point,
        },
        { new: true }
      );
      if (!updateUser) {
        res.status(401).json({ success: false, msg: "User not found" });
      }
      res.send({
        success: true,
        user: updateUser,
      });
    } catch (error) {
      console.log(error);
      res.json({ message: "Error" });
    }
  }

  async updateUserPoint(req, res) {
    try {
      // console.log(req.body);
      const id = req.query.id;

      let updateUser = await UserModel.updateOne(
        { _id: id },
        {
          $inc: { point: 1 },
        },
        { new: true }
      );
      if (!updateUser) {
        res.status(401).json({ success: false, msg: "User not found" });
      }
      res.send({
        success: true,
        user: updateUser,
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
module.exports = new UserController();
