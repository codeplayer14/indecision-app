"use strict";

console.log("App is running");

var app = {

    title: 'Indecision App',
    subtitle: "Put your life in hands of a computer",
    options: ['One']

};

function getLocation() {

    return 'Unknown';
}
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        " ",
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        " ",
        app.subtitle,
        " "
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            " Item One"
        ),
        React.createElement(
            "li",
            null,
            " Item Two "
        )
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
