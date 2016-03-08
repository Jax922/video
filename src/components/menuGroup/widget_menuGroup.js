
require('./widget_menuGroup.less');

module.exports = function(app){
  return app.directive('msMenu', function(){
    return {
      restrict: 'E',
      templateUrl: './components/menuGroup/widget_menuGroup.html',
      scope: {
        menu: '='
      },

    }
  })
}
