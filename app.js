const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

console.log(__dirname);

app.get("/", (req, res) => {
  // res.sendFile(__dirname + "/views/home.html");
  res.render("home", { style: ["main.css", "font.css"] });
});

app.get("/about", function (req, res) {
  //   res.send("hello World");
  // res.sendFile(__dirname + "/views/about.html");
  res.render("about", { style: ["about.css", "font.css"] });
});

app.get("/itinaries", (req, res) => {
  // res.sendFile(__dirname + "/views/works.html");
  res.render("itineraire", { style: ["font.css", "itineraire.css"] });
});

app.get("/gallery", (req, res) => {
  // res.sendFile(__dirname + "/views/gallery.html");
  res.render("gallery", { style: ["font.css", "gallery.css"] });
});

app.listen(3000, () =>
  console.log("server is running on http://localhost:3000")
);
