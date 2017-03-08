const {Page, Button, TextView} = require('tabris');
const style = require('../cfg/style.json');

let page = new Page({
  title: "Tab Page Layout: Tabris 1.10",
  background: style.page.bgColor,
  topLevel: true
});

new TextView({
  layoutData: {centerX: 0, top: 'prev() 10'},
  alignment: 'center',
  textColor: style.pageTile.textColor,
  font: style.pageTile.fontStyle,
  text: 'Sign In Here',
}).appendTo(page);

new Button({
  layoutData: {left: 20, top: 'prev() 10', right: 20},
  alignment: 'center',
  background: style.button.primary.bgColor,
  textColor: style.button.primary.textColor,
  font: style.button.primary.fontStyle,
  text: 'Sign In'
}).on('select', function () {
  console.log('Signing in....');
}).appendTo(page);

page.open();
