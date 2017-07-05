(function(app){
    var Class = ng.core.Class;

    var testId = 1;

    app.QuoteService = Class ({
        constructor : function QuoteService (){
            this.id = testId++;
            this.quotes = quotes;
        },

        getRandomQuote : function () {
            console.log('Service\'s instance number: ', this.id);
            var randomIndex = Math.floor(Math.random() * this.quotes.length);
            return this.quotes[randomIndex];
        },

        generateRandomQuotes : function (delay, callback) {
            var self = this;

            callback ( this.getRandomQuote () );
            setInterval ( function () {
                callback (self.getRandomQuote () );
            }, delay );
        }
    })

    var quotes = [
        {
            "line" : "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers classes, modules, and interfaces to help you build robust components.",
            "author" : "Author Author"
        },
        {
            "line" : "TypeScript files opened in Visual Studio Code are treated as independent units.",
            "author" : "Nonauthor Nonauthor"
        },
        {
            "line" : "ASP.NET Core is a new open-source and cross-platform framework for building modern cloud-based Internet-connected applications, such as web apps, IoT apps and mobile backends.",
            "author" : "Nonauthor Author"
        },
        {
            "line" : "Looking for an opinionated guide to Angular syntax, conventions, and application structure? Step right in! This style guide presents preferred conventions and, as importantly, explains why.",
            "author" : "Nonauthor Author"
        },
        {
            "line" : "The MoSCoW method is a prioritization technique used in management, business analysis, project management, and software development to reach a common understanding with stakeholders on the importance they place on the delivery of each requirement - also known as MoSCoW prioritization or MoSCoW analysis.",
            "author" : "Nonauthor Author"
        }
    ];
})(window.app || (window.app = {}));