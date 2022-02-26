// import { IncomingMessage, ServerResponse } from 'http';
import express = require('express');
const todos = require('./todos');
const middlewares = require('./middleware');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config({ path: '../.env' });
const { Schema } = mongoose;
const router = express.Router();
const PORT = process.env.PORT || 3000;
const app = express();
// app.listen(PORT, () => {
//   console.log('Listening at PORT: ' + PORT);
// });

// app.get('/todos/', (req: express.Request, res: express.Response) => {
//   if (req.query.page == '1' && req.query.limit == '10') {
//     res.send('Hello World!' + req.query.page + req.query.limit);
//   }
// });
// app.post('/', () => {});
// async function start() {
//   try {
//     await mongoose.connect(
//       'mongodb+srv://admin:admin@cluster0.selxi.mongodb.net/todos',
//       {}
//     );
//   } catch (error) {
//     console.log(error);
//   }
// }
//
//
//
const model = new Schema({
  message: String,
  completed: Boolean,
  id: String,
});
//
//
//
app.use(cors());
router.use('/todos', todos);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
