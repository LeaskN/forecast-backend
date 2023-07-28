const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())

app.get('/', (req, res) => {
  res.send('Weather forecast backend')
  res.end()
})

app.get("/latlon", (req, res) => {
  const street = req?.query?.street || '20+W+34th+St.';
  const city = req?.query?.city || 'new+york';
  const state = req?.query?.state || 'NY';
  fetch(`https://geocoding.geo.census.gov/geocoder/geographies/address?street=${street}&city=${city}&state=${state}&benchmark=Public_AR_Census2020&vintage=Census2020_Census2020&layers=10&format=json`)
    .then(response => response.json())
    .then(data => res.send(data.result))
    .catch(err => console.log('ERROR', err))
})


app.get("/weather", (req, res) => {
  const lat = req.query.lat || '40.7';
  const lng = req.query.lng || '-73.9';
  fetch(`https://api.weather.gov/points/${lat},${lng}`)
    .then(response => response.json()
      .then(response => {
        const forecast = response?.properties?.forecast;
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