// const http = require('http');
// const port = process.env.PORT || 8080

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });




// server.listen(port,() => {
//   console.log(`Server running at port `+port);
// });


const express = require('express');
const app = express();

app.get('/', (req, res) => {
 
  res.send('Hello World!')
  
  res.end()
})

app.get('/demo', (req, res) => {
 
  res.send('Demo Route!')
  
  res.end()
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(
`Server started on port ${PORT}`));