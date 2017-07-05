(function(app){
    var Component = ng.core.Component;
    var QuoteService = app.QuoteService;


    app.SecondComponent = Component ({
        selector : 'second',
        template : '<p><em>{{quote.line}}</em>{{quote.author}}</p>'
    })
    .Class ({
        constructor : [QuoteService, function SecondComponent (qouteService) {
            var self = this;

            qouteService.generateRandomQuotes(1000, function (quote) {
                self.quote = quote;
            })
        }]
    })
})(window.app || (window.app = {}));