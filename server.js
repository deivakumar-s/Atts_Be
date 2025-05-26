const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const purityRoutes = require("./routes/purityroutes");
const metalRoutes = require("./routes/metalrateroutes");

const app = express();
const port = 5000;

connectDB();


app.use(express.json());
app.use(cors());


app.use("/purityapi", purityRoutes);  
app.use("/metalapi", metalRoutes);    


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
