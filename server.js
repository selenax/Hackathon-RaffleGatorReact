const express = require('express');
// require('dotenv').config('.env');
//
// console.log(process.env.FAUNADB_SERVER_SECRET)

// const axios = require('axios');

const app = express();

app.use('/', express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
