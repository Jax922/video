require('./widget_flatButton.less');


module.exports = function(app){
  return app.directive('msFlatbtn', function(){
    return {
      restrict: 'EA',
      templateUrl: './components/flatButton/widget_flatButton.html',
      transclude: true
    }
  })
}
