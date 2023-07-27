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

app.get("/latlon", (req, res) => {
  const street = req.query.street;
  const city = req.query.city;
  const state = req.query.state;
  fetch(`https://geocoding.geo.census.gov/geocoder/geographies/address?street=${street}&city=${city}&state=${state}&benchmark=Public_AR_Census2020&vintage=Census2020_Census2020&layers=10&format=json`)
    .then(response => response.json())
    .then(data => res.send(data.result))
    .catch(err => console.log('ERROR', err))
})


app.get("/weather", (req, res) => {
  const lat = req.query.lat;
  const lng = req.query.lng;
  fetch(`https://api.weather.gov/points/${lat},${lng}`)
    .then(response => response.json()
      .then(response => {
        const forecast = response.properties.forecast;
        fetch(forecast)
          .then(response => response.json())
          .then(data => {
            return res.send(data);
          })
          .catch(err => console.log('ERROR', err))
      })
    )
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(
`Server started on port ${PORT}`));