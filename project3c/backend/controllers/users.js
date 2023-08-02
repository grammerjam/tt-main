const { connection } = require("../app.js");

export const getUsers = () => {
  const selectQuery = "SELECT * FROM users";
  return connection
    .query(selectQuery)
    .then((results) => {
      return results[0];
    })
    .catch((err) => console.error(err));
};
