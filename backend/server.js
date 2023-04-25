const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 6700;
const blogRouter = require("./routes/admin/Adminroutes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/admin", blogRouter);

app.get("/test", (req, res) => {
  res.status(200).send("server is up...");
});

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://admin:admin@main.ievjqeq.mongodb.net/?retryWrites=true&w=majority"
);
app.listen(port, () => {
  console.log("Server listening on port " + port);
});
