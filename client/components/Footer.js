var React = require('react');

var Button = require('../commons/button');

var Footer = React.createClass({

    render() {
        return (
            React.createElement('div', {id: 'footer'},
                React.createElement(Button)
            )
        )
    }
});

module.exports = Footer;