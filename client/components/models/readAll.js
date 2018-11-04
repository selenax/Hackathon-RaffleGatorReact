const path = require('path');
// console.log(path.join(__dirname, '/../../../.env'))
// require('dotenv').config(path.join(__dirname, '/../../../.env'));
var faunadb = require('faunadb');

const q = faunadb.query
const client = new faunadb.Client({
  // secret: process.env.FAUNADB_SERVER_SECRET
  secret: "fnAC-8Uj8TACANHmvAaKxX0ao6FAfRt0OoZ-RHcg"
});


let readAll = () => {
  console.log('Function `todo-read-all` invoked')
  return client.query(
      q.Map(
        q.Paginate(
          q.Match( // todo use lists_by_owner
            q.Ref("indexes/all_posts"))), (ref) => q.Get(ref))).then((r) => {
      let array = r.data;
      let results = [];
      array.map(entry => (
        results.push(entry.data)
      ));
      console.log(results);
      return results
    });
  }

export default readAll;

// readAll((error, results) => {
//   if (error) {
//     console.log('No worko')
//   } else {
//     console.log(results.data.title)
//   }
// })
