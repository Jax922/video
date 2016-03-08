
require('./widget.less')


module.exports = function(app){
  return app.directive('msSidebar', function(){
    return {
      restrict: 'E',
      templateUrl: './components/sideBar/widget.html',
      transclude: true,
      controller: function(){
        
      }
    }
  })
}
