const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 8080;
const app = express();
const routes = require("./controllers/petsController.js");
const path = require("path");



app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.resolve(__dirname, 'views/layouts')
}));
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, 'views'));

// app.engine("handlebars", exphbs({ defaultLayout: "main", extname: '.handlebars' }));
// app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
