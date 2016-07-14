const express = require('express');
const path = require('path');
const users = require('./routes/users');
const profiles = require('./routes/profiles');
const statuses = require('./routes/statuses');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/users', users);
app.use('/api/profiles', profiles);
app.use('/api/statuses', statuses);

const server = app.listen(process.env.PORT || 3000, () =>  {
  console.log(`Server ready on port ${server.address().port}`);
});