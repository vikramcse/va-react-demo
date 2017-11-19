var Counter = React.createClass({
    // The getDefaultProps() method is called once
    getDefaultProps: function() {
        console.log('getDefaultProps called');

        return {
            title: 'A Counter Example'
        }
    },

    // The getInitialState() method is also invoked once,
    // right before the mounting phase.
    getInitialState: function() {
        console.log("getInitialState called");

        return {
            count: 0
        }
    },

    render: function() {
        console.log('rendering stuff');
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>{this.state.count}</div>
                <input type='button' value='+' />
                <input type='button' value='-' />
            </div>
        );
    }
});

ReactDOM.render(<Counter />, document.getElementById('mount'));