const SignInPage  = require('./signInPage.js');
const MainTabPage = require('./mainTabPage.js');
const auth        = require('./lib/authentication.js');


if (auth.isAuthenticated()) {
    MainTabPage.create().open();
} else {
    SignInPage.create().open();
}

