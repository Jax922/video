



module.exports = function(app){
  return app.controller('navCtrl', ['$scope', function(scope){
    this.menu = [
      {text: '开心一刻', route: 'happlytime'},
      {text: '开心一刻', route: 'happlytime'},
      {text: '开心一刻', route: 'happlytime'},
      {text: '开心一刻', route: 'happlytime'},
      {text: '开心一刻', route: 'happlytime'},
      {text: '开心一刻', route: 'happlytime'}
    ];
    scope.$on('sideOpenToNav', function(event, data){
      scope.isopen = data;
    })
    // this.isopen = true;
    scope.isopen = false;

  }]);
}
