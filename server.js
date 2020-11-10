// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const encode = require("./coders/encode");
const decode = require("./coders/decode");

const express = require("express");
const app = express();
app.use(express.json());
// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/home/index.html");
});

// send the default array of dreams to the webpage
app.post('/encode', function (req, res) {
  let r = {}
  r = encode(req.body)
  console.log(req.body);
  console.log(r);
  res.json(r);
});
app.post('/decode', function (req, res) {
  let r = {}
  r = decode(req.body)
  console.log(req.body);
  console.log(r);
  res.json(decode(req.body));
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 3001, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
