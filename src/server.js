const bodyParser = require('body-parser');

const express = require('express');

const STATUS_USER_ERROR = 422;
const OK = 200;
// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
const posts = [

  {
    title: "Bill and Teds",
    contents: "Excellent Adventure",
  },

  {
    title: "Bill and Teds",
    contents: "Excellent Adventure",
  },
];
const server = express();
server.use(bodyParser.json());
// to enable parsing of json bodies for post requests

server.get('/posts', (req, res) => {
  const good = 'All Good!';
  const bad = 'Not Good!';
  const term = 'Bill';
  for (i = 0; i < posts.length; i++) {
    if (term === posts.title || term === posts.contents) {
      return 'All Good!';
      res.status(200);
      res.send(good);
    }
    

//   } else if (term !== title[] || contents[]) {
//     return 'Not Good!';
//     res.status(422);
//     res.send(bad);

//   }
// }

// });



// TODO: your code to handle requests
  
  server.post('/posts',function(req,res){
    const title = posts.title;
    const contents = posts.contents;
    if ( contents === "" || title === "") {
      res.status(STATUS_USER_ERROR);
      res.json({ err: 'Must provide a title and content' });
      return;
    }
  
  });
  
  module.exports = { posts, server };