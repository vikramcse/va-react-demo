var Counter = React.createClass({
    getInitialState: function() {
        return {
            count: 0
        }
    },

    render: function() {
        console.log('rendering stuff');
        return (
            <div>
                <div>{this.state.count}</div>
                <input type='button' value='+' />
                <input type='button' value='-' />
            </div>
        );
    }
});

ReactDOM.render(<Counter />, document.getElementById('mount'));