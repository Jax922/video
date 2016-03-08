
require('./widget.less')


module.exports = function(app){
  return app.directive('msSidebar', function(){
    return {
      restrict: 'E',
      templateUrl: './components/sideBar/widget.html',
      transclude: true,
      scope: {
        isopen: '='
      },
      link: function(scope, elem, attrs){
        var sideSwitch = elem.find('i');
        sideSwitch.bind('click', function(e){
          scope.isopen = false;
          scope.$apply();
        })
      }
    }
  })
}
