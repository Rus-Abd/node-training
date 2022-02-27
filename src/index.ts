const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: '../.env' });
const port = process.env.PORT || 3000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
export {};
