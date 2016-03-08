

module.exports = function(app){
  return app.controller('mainCtrl', ['$scope', '$state', function(scope, state){
    state.go('home');   //一开始就转到home状态
    scope.$on('sideOpen', function(event, data){
      scope.$broadcast('sideOpenToNav', data);
    })
  }]);
}
