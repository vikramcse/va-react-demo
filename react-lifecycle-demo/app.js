var LoadTextFromWeb = React.createClass({
    getInitialState: function() {
        return {
            fetching: false,
            first_name: "",
            last_name: ""
        }
    },

    componentDidMount: function() {
        this.setState({
            fetching: true
        });

        fetch(this.props.url, { 'method': "GET" })
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            this.setState({
                fetching: false,
                first_name: result.data[0].first_name,
                last_name: result.data[0].last_name
            });
        }.bind(this));
    },

    render: function() {
        if (this.state.fetching) {
            return <div>Fetching data from web...</div>;
        }

        return (
            <div>{this.state.first_name} -- {this.state.last_name}</div>
        )
    }
});

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

    // invoked once and immediately before
    // the initial rendering occurs

    // calling setState will not trigger re-render
    componentWillMount: function() {
        console.log("componentWillMount called");
    },

    // invoked once and immediately after React
    // inserts the component into the DOM
    componentDidMount: function() {
        console.log("componentWillMount called");
    },

    handleIncrement: function() {
        var incCount = this.state.count + 1;
        this.setState({
            count: incCount
        });
    },

    handleDecrement: function() {
        var decCount = this.state.count - 1;
        this.setState({
            count: decCount
        });
    },

    render: function() {
        console.log('rendering stuff');
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>{this.state.count}</div>
                <input type='button' value='+' onClick={this.handleIncrement}/>
                <input type='button' value='-' onClick={this.handleDecrement}/>

                <br/><br/>
                <LoadTextFromWeb url="https://reqres.in/api/users"/>
            </div>
        );
    }
});

ReactDOM.render(<Counter />, document.getElementById('mount'));