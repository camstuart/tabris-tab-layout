const {Page, Tab, TabFolder, TextView} = require('tabris');
const style                            = require('../cfg/style.json');
const MoreTab                          = require('./moreTab.js');

exports.create = () => {

    let page = new Page({
        title: 'Main Page',
        topLevel: true
    });

    let tabFolder = new TabFolder({
        layoutData: {left: 0, top: 0, right: 0, bottom: 0},
        paging: true
    }).appendTo(page);

    let createTab = (title, image, seletedImage) => {
        let tab = new Tab({
            title: title, // converted to upper-case on Android
            image: {src: image, scale: 2},
            selectedImage: {src: seletedImage, scale: 2}
        }).appendTo(tabFolder);

        if (tab.get('title').toString().toLowerCase() === 'more') {
            MoreTab.load(tab);
        } else {
            new TextView({
                layoutData: {centerX: 0, centerY: 0},
                text: 'Content of Tab ' + title
            }).appendTo(tab);
        }
    };

    createTab('Home', 'assets/icons/home.png', 'assets/icons/home-active.png');
    createTab('List', 'assets/icons/list.png', 'assets/icons/list-active.png');
    createTab('More', 'assets/icons/more.png', 'assets/icons/more-active.png');

    tabFolder.on('change:selection', (widget, tab) => {
        console.log(tab.get('title'));
    });

    return page;
};
