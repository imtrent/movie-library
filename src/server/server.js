const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const axios = require('axios');
const { apiURL, apiKey } = require('../../config.js');

// Initialize server
const app = express();
const port = 3000;

// Middlewares
app.use(json());
app.use(cors());

// Endpoints
app.get('/api/movies', (req, res, next) => {
	axios.get(`${apiURL}/movie/popular${apiKey}`).then(response => {
		res.status(200).json(response.data)
	})
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});