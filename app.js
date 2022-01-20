const express = require("express");
const app = express();
const port = 8080;
app.get("/", (req, res) => {
res.send("Hello Heroku");
})
app.listen(process.env.PORT || port, () => {
console.log("listening 8080...");
});

//https://helooapp.herokuapp.com/ | https://git.heroku.com/helooapp.git