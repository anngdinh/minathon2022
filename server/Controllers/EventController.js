const express = require("express");
let EventModel = require("../Model/EventModel");
class EventController {
  async createEvent(req, res) {
    console.log("path", `http://localhost:5000/${req.file.path}`);
    const { userID, description, address, startTime, endTime, title } =
      req.body;
    try {
      const newEvent = new EventModel({
        userID: userID,
        listJoin: [],
        description: description,
        address: address,
        numRegister: 0,
        startTime: startTime,
        endTime: endTime,
        title: title,
        img: `http://localhost:5000/${req.file.path}`,
        date: new Date(),
      });
      await newEvent.save();
      res.send({ success: true, Event: newEvent });
    } catch (error) {
      console.log(error);
    }
  }
  async getEvent(req, res) {
    console.log(req.query.id);
    if (req.query.id !== undefined) {
      try {
        console.log("cc");
        await EventModel.findOne(
          { _id: req.query.id },
          function (err, EventModel) {
            if (err) {
              console.log(err);
              res.json({ message: `ID: ${req.query.id} not found` });
            } else {
              console.log(EventModel);
              res.json(EventModel);
            }
          }
        ).populate("userID", ["name"]);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await EventModel.find(function (err, EventModel) {
          if (err) {
            console.log(err);
          } else {
            res.json(EventModel);
          }
        })
          .populate("userID", ["name"])
          .clone()
          .catch(function (err) {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }
  // async getSingleEvent(req, res) {
  //   console.log(req.query);
  //   try {
  //     const id = req.params.id;
  //     EventModel.findOne({ _id: id }, function (err, EventModel) {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         // console.log(typeof account);
  //         res.json(EventModel);
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async updateEvent(req, res) {
    try {
      console.log(req.query);
      const id = req.query.id;
      const {
        listJoin,
        description,
        address,
        numRegister,
        startTime,
        endTime,
        title,
      } = req.body;
      // const listJoin = undefined;
      let updateEvent = await EventModel.findOneAndUpdate(
        { _id: id },
        {
          listJoin: listJoin,
          description: description,
          address: address,
          numRegister: numRegister,
          startTime: startTime,
          endTime: endTime,
          title: title,
        },
        { new: true }
      );
      if (!updateEvent) {
        res.status(401).json({ success: false, msg: "Event not found" });
      }
      res.send({
        success: true,
        Event: updateEvent,
      });
    } catch (error) {
      console.log(error);
      res.json({ message: "Error" });
    }
  }
}
module.exports = new EventController();
