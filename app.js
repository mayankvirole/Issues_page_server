const express = require("express");
const cors = require("cors");

const app = express();

app.use( cors());

const PORT = process.env.PORT || 3000;

app.listen( PORT, error => {
	if(error){
		console.error(error.message);
		return;
	}

	console.log(`Server is running on port ${PORT}`);
})

module.exports = app;