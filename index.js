const express = require("express");

const app = express();

// Make everything inside of public/ available
app.use(express.static("public"));

// app.get('hello', (req, res) => {
// })

app.get("/hello", (request, response) => {
  console.log(__dirname);
  response.sendFile(__dirname + "/public/views/index.html");
});

app.get("/about", (request, response) => {
  console.log(__dirname);
  response.sendFile(__dirname + "/public/views/about.html");
});

app.listen(3000, () => console.log("Server up and running on port 3000"));
