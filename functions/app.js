const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
app.use(cors())

router.get('/demo', (req, res) => {
  res.json([
    {
      id: '001',
      name: 'James', 
      email: 'Bond@gmail.com'
    }
  ])
})

router.get("/latlon", (req, res) => {
  const street = req.query.street;
  const city = req.query.city;
  const state = req.query.state;
  fetch(`https://geocoding.geo.census.gov/geocoder/geographies/address?street=${street}&city=${city}&state=${state}&benchmark=Public_AR_Census2020&vintage=Census2020_Census2020&layers=10&format=json`)
    .then(response => response.json())
    .then(data => res.send(data.result))
    .catch(err => console.log('ERROR', err))
})


router.get("/weather", (req, res) => {
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

const port = 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use('/.netlify/functions/app', router);
module.exports.handler = serverless(app);