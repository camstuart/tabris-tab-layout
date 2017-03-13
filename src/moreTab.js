const {Page, Button, TextView, ui} = require('tabris');
const style                        = require('../cfg/style.json');
const SignInPage                   = require('./signInPage.js');
const SettingsPage                 = require('./settingsPage.js');
const auth                                = require('./lib/authentication.js');

exports.load = (tab) => {

    new Button({
        layoutData: {left: 20, top: 'prev() 10', right: 20},
        alignment: 'center',
        background: style.button.primary.bgColor,
        textColor: style.button.primary.textColor,
        font: style.button.primary.fontStyle,
        text: ' Sign Out',
        image: 'assets/icons/sign-out-white.png'
    }).on('select', () => {
        console.log('Signing out....');
        auth.signOut();
        SignInPage.create().open();
    }).appendTo(tab);

    new Button({
        layoutData: {left: 20, top: 'prev() 10', right: 20},
        alignment: 'center',
        background: style.button.primary.bgColor,
        textColor: style.button.primary.textColor,
        font: style.button.primary.fontStyle,
        text: ' Settings',
        image: 'assets/icons/settings-white.png'
    }).on('select', () => {
        SettingsPage.create().open();
    }).appendTo(tab);

};
