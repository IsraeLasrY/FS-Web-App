import express from "express";
import { connect } from "mongoose";
import coockieSession from "cookie-session";
import { initialize, session } from "passport";
import { mongooURI, cookieKay } from "./config/keys";
import "./models/User";
import "./services/passport";

connect(mongooURI);

const app = express();

app.use(
  coockieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKay],
  })
);
app.use(initialize());
app.use(session());

require("./routes/autoRoutes")(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
