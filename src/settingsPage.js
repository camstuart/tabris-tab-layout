const {Page, Button, TextView, ui} = require('tabris');
const style                        = require('../cfg/style.json');

exports.create = () => {

    let page = new Page({
        title: 'Settings',
        topLevel: false
    });

    return page;
};
