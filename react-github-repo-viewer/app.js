var HelloComponent = React.createClass({
    render: function() {
        return React.createElement('h1', null, 'Hello, world!');
    }
});

ReactDOM.render(React.createElement(HelloComponent, null), document.getElementById('mount'));