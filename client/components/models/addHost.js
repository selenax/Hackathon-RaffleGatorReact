const path = require('path');
// require('dotenv').config(path.join(__dirname, '/..../.env'));
var faunadb = require('faunadb');

const q = faunadb.query
const client = new faunadb.Client({
  // secret: process.env.FAUNADB_SERVER_SECRET
  secret: "fnAC-8Uj8TACANHmvAaKxX0ao6FAfRt0OoZ-RHcg"
});

let addHost = (hosts) => {

  client.query(
    q.Create(
      q.Class("hosts"), {
        data: hosts

      })).then((r) => {
    console.log(r);
  })
}

export default addHost;