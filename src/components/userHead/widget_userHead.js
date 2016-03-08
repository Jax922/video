require('./widget_userHead.less');

module.exports = function(app){
  return app.directive('msUserhead',function(){
    return {
      restrict: 'EA',
      templateUrl: './components/userHead/widget_userHead.html',
      scope: {
        user: '='
      }
    }
  })
}
