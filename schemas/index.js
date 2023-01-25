const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect("mongodb://localhost:27017/spa_mall",{ignoreUndefined: true}).catch((err) => {
    console.error(err);
  });
};
mongoose.set('strictQuery',true)

module.exports = connect;