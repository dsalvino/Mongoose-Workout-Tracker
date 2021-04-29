const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const APIroutes = require('./routes/apiRoutes');
const HomeRoutes = require('./routes/homeRoutes');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(APIroutes);
app.use(HomeRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`);
});