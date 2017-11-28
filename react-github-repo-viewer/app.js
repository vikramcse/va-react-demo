var Button = React.createClass({
    handleClick: function(e) {
        e.preventDefault();
        this.props.handleButtonClick();
    },
    render: function() {
        return <button onClick={this.handleClick} ref="search">{this.props.buttonText}</button>
    }
});

var ItemList = React.createClass({
    render: function() {
        var items = [];
        for (var i = 0; i < this.props.data.length; i++) {
            items.push(<li key={i}>{this.props.data[i]}</li>)
        }

        return (
            <ul>
                {items}
            </ul>
        );
    }
});

var Main = React.createClass({
    getInitialState: function() {
        return {
            text: "",
            data: ["vikram", "jadhav", "From visible alpha"]
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
                Enter username <input type="text" ref="search" placeholder="Enter username"/> &nbsp;
                <Button handleButtonClick={this.handleChange} buttonText="search username"/>
                <div ref="displayArea">My name is {this.state.text}</div>
                <ItemList data={this.state.data}/>
            </div>
        );
    }
});

ReactDOM.render(<Main />, document.getElementById('mount'));