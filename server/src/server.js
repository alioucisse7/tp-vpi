var express = require('express');
var app = express();


app.get("/", (req, res) => {
    res.status(200).send("start well");
  });

  var server = app.listen(5000, () => {

    var host = server.address().address;
    var port = server.address().port;

   console.log(`Vpi-app listening at http://${host}:${port} `)
}); 

