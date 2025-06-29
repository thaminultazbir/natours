const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<DB_PASSWORD>', process.env.PASSWORD);
mongoose
  .connect(DB)
  .then(() => console.log(`DB is connected successfully`))
  .catch(err => console.error('DB Connection error: ', err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
