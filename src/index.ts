const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
