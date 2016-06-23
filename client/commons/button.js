var React = require('react');


var Button = React.createClass({

    render: function() {
        // var context = canvas.getContext('2d');
        // var label = 'Button';

        return (
            React.createElement('div', {className: 'footer-btn'},
                // React.createElement('button', {className: 'button one-button'}, label)

            )
        )

    }
});

module.exports = Button;
