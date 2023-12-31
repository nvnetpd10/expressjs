const express = require('express');
const app = express(); // The main app
const admin = express();
const PORT = 3000;
 
admin.on('mount', function (parent) {
    console.log('Admin Mounted');
});
 
admin.get('/', function (req, res) {
    res.send('Admin Homepage');
});
 
app.use('/admin', admin);
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});