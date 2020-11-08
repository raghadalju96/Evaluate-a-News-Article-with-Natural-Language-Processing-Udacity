var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//const mockAPIResponse = require("./mockAPI.js");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

const fetch = require("node-fetch");
const apiKey = process.env.API_KEY;

const reciveData = async (url = "") => {
  const baseUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json&lang=en&url=${url}&model=general`;

  const res = await fetch(baseUrl, {
    method: "POST",
  });
  try {
    const newdata = await res.json();
    console.log(newdata);
    return newdata;
  } catch (error) {
    console.log(error);
  }
};

app.post("/article", async (req, res) => {
  console.log(req.body.url);
  const url = req.body.url;
  console.log(url);
  const newdata = await reciveData(url);
  console.log(newdata);
  res.send(newdata);
});

// app.get("/all", (req, res) => {
//   res.send(projectData);
// });
