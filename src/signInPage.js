const {Page, Button, TextInput, TextView} = require('tabris');
const style                        = require('../cfg/style.json');
const MainTabPage                  = require('./mainTabPage.js');

exports.create = () => {

    let page = new Page({
        title: 'Tab Page Layout: Tabris 1.9',
        background: style.page.bgColor,
        topLevel: true
    });

    new TextView({
        layoutData: {centerX: 0, top: 'prev() 10'},
        alignment: 'center',
        textColor: style.pageTile.textColor,
        font: style.pageTile.fontStyle,
        text: 'Sign In Here'
    }).appendTo(page);

    let emailInput = new TextInput({
        layoutData: {left: 20, top: 'prev() 30', right: 20},
        alignment: 'center',
        id: 'emailInput',
        message: 'Email',
        focused: true,
        keyboard: 'email',
        text: 'user@example.com'
    }).appendTo(page);

    let passwordInput = new TextInput({
        layoutData: {left: 20, top: 'prev() 10', right: 20},
        alignment: 'center',
        id: 'passwordInput',
        type: 'password',
        message: 'Password',
        text: 'secret'
    }).appendTo(page);

    let loginButton = new Button({
        layoutData: {left: 20, top: 'prev() 10', right: 20},
        alignment: 'center',
        background: style.button.primary.bgColor,
        textColor: style.button.primary.textColor,
        font: style.button.primary.fontStyle,
        text: ' Sign In',
        image: 'assets/icons/sign-in-white.png'
    }).on('select', () => {
        console.log('Signing in....');
        MainTabPage.create().open();
        page.dispose();
    }).appendTo(page);

    return page;
};

