const express = require("express");
require("./services/passport");

const app = express();

require("./routes/autoRoutes")(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
