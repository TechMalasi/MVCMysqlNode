const express = require("express");
const path = require("path");
const { promisify } = require("util");
const app = express();
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "ejs");

var flash = require("connect-flash");
//using express-session
app.use(
  require("express-session")({
    secret: "This is secret",
    resave: false,
    // cookie :{maxAge : 1000},
    saveUninitialized: false,
  })
);

app.use(flash());

app.use(function (req, res, next) {
  res.locals.message = req.flash();
  next();
});

const Users = require("./app/routes/UsersRoute");

app.get("/about",function(req,res){
res.json({msg:'working'})
});

app.use("/register", function (req, res) {
  res.render("register");
});
app.use("/api/v1/", Users);

PORT = process.env.PORT || 8085;
app.listen(PORT, function () {
  console.log(`Server is listening at port ${PORT}`);
});
