(function(app){
    var Component = ng.core.Component;

    app.AppComponent = Component({
        selector : 'main-app',
        template: `<h3>Angular - hello... </h3>
                <second></second>`
    })
    .Class({
        constructor : function AppComponent () {}
    });

})(window.app || (window.app = {}));