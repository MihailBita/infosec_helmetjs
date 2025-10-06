const express = require('express');
const helmet = require('helmet');
const app = express();
const router = express.Router();

module.exports = router;

app.get('style.css', function(req, res) {
  res.sendFile("public" + "/" + "style.css");
});

app.get('index.html', function(req, res) {
  res.sendFile("views" + "/" + "index.html");
});






































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
