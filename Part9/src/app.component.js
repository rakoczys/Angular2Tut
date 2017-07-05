(function(app){
  var Component = ng.core.Component;

app.AppComponent = Component({
    selector: 'my-app',
    template: `<h3>Angular - hellooo...</h3>
              <second></second>`
})
.Class({
    constructor : function AppComponent (){}
});

})(window.app || (window.app = {}));