const path = require('path');
// require('dotenv').config(path.join(__dirname, '/..../.env'));
var faunadb = require('faunadb');

const q = faunadb.query
const client = new faunadb.Client({
  // secret: process.env.FAUNADB_SERVER_SECRET
  secret: "fnAC-8Uj8TACANHmvAaKxX0ao6FAfRt0OoZ-RHcg"
});

let addContest = (contest) => {

  client.query(
    q.Create(
      q.Class("contests"), {
        data: contest

      })).then((r) => {
    console.log(r);
  })
}

export default addContest;

// addContest({"name": "mike", "age": 100});
