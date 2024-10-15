const express = require("express");
const mongoose = require("mongoose");
const coockieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongooURI);

const app = express();

app.use(
  coockieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKay],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/autoRoutes")(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
