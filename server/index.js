const express = require('express');
const colors = require('colors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const cors = require('cors');
const connectDB = require('./config/db.js');
const port = process.env.PORT || 3000;


const app = express();

//* Connect to the database
connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV,
}));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});