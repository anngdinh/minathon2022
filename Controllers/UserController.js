const express = require("express");
let UserModel = require("../Model/UserModel");
class UserController {
  async createUser(req, res) {
    console.log(req.body);
    const { name, phone } = req.body;
    try {
      const newUser = new UserModel({
        name: name,
        phone: phone,
        numReceive: 0,
        numGive: 0,
        point: 0,
      });
      await newUser.save();
      res.send({ success: true, user: newUser });
    } catch (error) {
      console.log(error);
    }
  }
  async getUser(req, res) {
	// console.log(res.query.id);
    console.log("get user", req.body);
        const customerId = req.body.customerId;
        const name = req.body.name;
        if (customerId !== undefined && name !== undefined) {
            try {
              const user = await UserModel.findOne({ customerId: customerId });
              if (user) {
                  res.send({ exist: true, user: user});
              } else {
                  try {
                      const newUser = new UserModel({
                          customerId: customerId,
                          name: name,
                          numReceive: 0,
                          numGive: 0,
                          point: 0,
                      });
                      await newUser.save();
                      res.send({ success: true, UserModel: newUser });
                  } catch (error) {
                      console.log(error);
                      res.send({ success: false });
                  }
              }
          } catch (error) {
              console.log(error);
          }
      }else{
        res.send({ success: false});
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
