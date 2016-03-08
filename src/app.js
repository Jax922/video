var angular = require('angular');
require('angular-ui-router');

// ******** 引入文件

require('./style/lib/bootstrap.css');
require('./style/app.less');

// ********

var app = angular.module('app', ['ui.router']);

//******** components require
require('./components/flatButton/widget_flatButton.js')(app);
require('./components/sideBar/widgetCtrl.js')(app);
require('./components/menuGroup/widget_menuGroup.js')(app);


//******** router require
require('./router.js')(app);


//********  controllers require

var ctrlBaseDir = './controllers/';
require(ctrlBaseDir + 'mainCtrl')(app);
require(ctrlBaseDir + 'navCtrl')(app);
require(ctrlBaseDir + 'topHomeCtrl')(app);
require(ctrlBaseDir + 'videosHomeCtrl')(app);

//********

console.log(app);
