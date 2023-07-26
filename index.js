// const express = require('express');

// const app = express();
// const url = 'https://geocoding.geo.census.gov/geocoder/geographies/address?street=4600+Silver+Hill+Rd&city=Washington&state=DC&benchmark=Public_AR_Census2020&vintage=Census2020_Census2020&layers=10&format=json';

// Curb CORS Error by adding a header here
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//   );
//   next();
// });

// app.get('/', async (req, res) => {
//   console.log('Get request received')
//   try {
//     const response = await fetch(url)
//     .then(res => res.json())
//     .then(res => res.send(res))
//     // res.json(response.data);
//   } catch (error) {
//     res.status(500).send('An error occurred while fetching data from the API.');
//   }
// });
// app.get('/get', async (req, res) => {
//   console.log('Get request received')
//   try {
//     console.log('fetching')
//     res.json(response.data)
//     // fetch('https://quotes.toscrape.com/random')
//       // .then((response) => response.text())
//       // .then((body) => {
//           // console.log(body);
//       // });
//   } catch (error) {
//     res.status(500).send('An error occurred while fetching data from the API.');
//   }
// });

fetch('https://reqres.in/api/users')
  .then(res => res.json())

const port = 8080; // Change this to any desired port number
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});