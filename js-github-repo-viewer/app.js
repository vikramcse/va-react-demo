var githubAPI = "https://api.github.com/users/";
var mount = document.getElementById("mount");
var textBox = document.getElementById("username");
var searchButton = document.getElementById("search");

var renderData = function (data) {
    mount.innerHTML = "";

    var ul = document.createElement("ul");
    for (var i = 0; i < data.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = data[i]["name"];
        ul.appendChild(li);
    }
    mount.appendChild(ul);
};

var clearSearch = function() {
    mount.innerHTML = "Fetching ...";
};

searchButton.addEventListener("click", function (e) {
    e.preventDefault();

    clearSearch();
    var usernameText = textBox.value;
    var url = githubAPI + usernameText + "/repos";

    fetch(url, { 'method': "GET" })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        renderData(data);
    });
});

