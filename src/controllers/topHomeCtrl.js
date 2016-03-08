



module.exports = function(app){
  return app.controller('topHomeCtrl', ['$scope', function(scope){
    this.islogin = false;
    this.user = {
      nickname: 'Sedan'
    }
    this.sideOpen = function(){
      scope.$emit('sideOpen', true)
    }
  }]);
}
