const express = require("express");
const app = express();
var path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./configure.js");
const fileupload = require("express-fileupload");
// const DeviceRoute = require("./Route/DeviceRoute.js");
// const NotiRoute = require("./Route/NotiRoute.js");
const UserRoute = require("./Route/UserRoute.js");
const CategoryRoute = require("./Route/CategoryRoute.js");
const ProductRoute = require("./Route/ProductRoute.js");
const TransitionRoute = require("./Route/TransitionRoute.js");
const EventRoute = require("./Route/EventRoute.js");

mongoose.Promise = global.Promise;
mongoose
  .connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("Can not connect to the database " + err);
    }
  );

// app.use("/device", DeviceRoute);
// app.use("/noti", NotiRoute);
// app.use(
//   fileupload({
//     useTempFiles: true,
//   })
// );
app.use(cors());
app.use("/public/", express.static("public"));
app.use("/tiki-validation-code/", express.static("tiki-validation-code"));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/user", UserRoute);
app.use("/product", ProductRoute);
app.use("/transition", TransitionRoute);
app.use("/event", EventRoute);
app.use("/category", CategoryRoute);
app.use("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/Home.html"));
});
app.listen(PORT, function () {
  // const port = app.address().port;
  console.log("Server is running on Port:", PORT);
});
// xx
