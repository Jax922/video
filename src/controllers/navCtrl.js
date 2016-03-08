



module.exports = function(app){
  return app.controller('navCtrl', ['$scope', function(scope){
    this.menu = [
      {text: '开心一刻', route: 'happlytime'},
      {text: '开心一刻', route: 'happlytime'},
      {text: '开心一刻', route: 'happlytime'},
      {text: '开心一刻', route: 'happlytime'},
      {text: '开心一刻', route: 'happlytime'},
      {text: '开心一刻', route: 'happlytime'}
    ]
    
  }]);
}
