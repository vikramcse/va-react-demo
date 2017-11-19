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
            <ul>{items}</ul>
        );
    }
});

var Main = React.createClass({
    getInitialState: function() {
        return {
            data: [],
            fetching: false
        }
    },

    handleChange: function() {
        var username = this.refs.search.value;

        this.setState({
            fetching: true
        });

        var githubAPI = "https://api.github.com/users/";
        var url = githubAPI + username + "/repos";

        fetch(url, { 'method': "GET" })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var repos = [];
            data.forEach(function(element) {
                repos.push(element["name"]);
            });

            this.setState({
                data: repos,
                fetching: false
            });
        }.bind(this));
    },

    render: function() {
        return (
            <div>
                <input type="text" ref="search" placeholder="Enter username"/> &nbsp;
                <Button handleButtonClick={this.handleChange} buttonText="search username"/>
                {this.state.fetching ? <h3>Fetching data from github</h3> : <ItemList data={this.state.data}/>}
            </div>
        );
    }
});

ReactDOM.render(<Main />, document.getElementById('mount'));