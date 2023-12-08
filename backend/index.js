const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// 미들웨어 등록
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const posts = [];
// Home route: display all posts
app.get('/', (req, res) => {
    //   res.json(posts);
    res.json(posts)
});

// Create a new post
app.post('/post', (req, res) => {
  const { title, content } = req.body;
  const newPost = { title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});