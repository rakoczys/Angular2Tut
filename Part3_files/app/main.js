(function(app){
    var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic();
    var AppModule = app.AppModule;
    var Class = ng.core.Class;

    var TestService = Class ({
        constructor : function () {

        },
        getRandomQuote : function () {
            return {
                line : 'Test quote...',
                author : 'Test Author'
            }
        }
    })

    platformBrowserDynamic.bootstrapModule(AppModule);
})(window.app || (window.app = {}));