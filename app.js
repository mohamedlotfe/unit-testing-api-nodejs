const express = require('express');
const app = express();

var tasksRouter = require('./routes/tasks');

app.use(express.json());


app.use('/api', tasksRouter);


const port = process.env.PORT || 3000;
module.exports = app.listen(port, () => console.log(`Listening on port ${port}...`));
