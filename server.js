const express = require('express');
const app = express();

var port = 3000;

app.use(express.static('public'));

app.get('/', function(request, response){
 response.sendFile('public/index.html', {'root': __dirname});
});


app.listen(port);
