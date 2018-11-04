
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
// require('dotenv').config('.env');
//
// console.log(process.env.FAUNADB_SERVER_SECRET)

// const axios = require('axios');
app.use(cors());

app.use('/', express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
