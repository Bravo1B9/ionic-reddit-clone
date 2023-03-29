const express = require('express');
const { MongoClient } = require('mongodb');

const PORT = 3000;

const app = express();

const dbUri = 'mongodb+srv://brendon:pass123@cluster0.ysgq09a.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log('Connected to database');
  } catch (err) {
    console.log(err);
  }
};

connectToDatabase();

app.listen(PORT, () => {
  console.log(`App listening on port `)
});