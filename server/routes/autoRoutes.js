const passport = require("passport");

//func that sand the user to this route and ask permission from google to get info on this user after he agree with it.
module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  //callback func after we get the info from google, put user on hold and take the 'code' from URL
  app.get("auth/google/callback", passport.authenticate("google"));
};
