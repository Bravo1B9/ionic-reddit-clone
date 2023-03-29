const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());

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

app.post('/posts', async (req, res) => {
  const db = client.db('database');
  const post = req.body;
  await db.collection('posts').insertOne(post);
  res.json({ msg: 'Post added' });
});

app.get('/posts', async (req, res) => {
  const db = client.db('database');
  const posts = await db.collection('posts').find().toArray();
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`App listening on port `)
});