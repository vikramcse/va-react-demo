var Main = React.createClass({
    getInitialState: function() {
        return {
            text: ""
        }
    },
    handleChange: function() {
        var username = this.refs.search.value;
        this.setState({
            text: username
        });
    },
    render: function() {
        return (
            <div>
                Enter username <input type="text" ref="search"/>
                <button onClick={this.handleChange} >Search</button>
                <div ref="displayArea">My name is {this.state.text}</div>
            </div>
        );
    }
});

ReactDOM.render(<Main />, document.getElementById('mount'));