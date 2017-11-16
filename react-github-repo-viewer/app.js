var HelloComponent = React.createClass({
    render: function() {
        return <h1>Hello Visible Alpha!</h1>;
    }
});

ReactDOM.render(<HelloComponent />, document.getElementById('mount'));