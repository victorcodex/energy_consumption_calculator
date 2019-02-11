const express = require("express");
const products = require("./routes/api/products");
const path = require("path");

const app = express();

const routes = express.Router();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// Use routes
app.use("/api/products", products);


// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Server running on PORT ${port}`));
