const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

app.get("/", (req, res) => {
  console.log(req.query)
  const street = req.query.street;
  const city = req.query.city;
  const state = req.query.state;
  fetch(`https://geocoding.geo.census.gov/geocoder/geographies/address?street=${street}&city=${city}&state=${state}&benchmark=Public_AR_Census2020&vintage=Census2020_Census2020&layers=10&format=json`)
    .then(response => response.json())
    .then(data => res.send(data.result))
    .catch(err => console.log('ERROR', err))
})


const port = 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});