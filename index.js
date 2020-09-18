var API = "https://api.github.com/users/";
const user = "chandzul";

fetch("https://api.github.com/users/"+user)
.then(response => response.json())
.then(data => {
    var name = data.login;
    var bio = data.bio;
    var blog = data.blog;
    var email = data.email;
    var twitter = data.twitter_username;
    var repos = data.public_repos;

    console.log(name) // Prints result from `response.json()` in getRequest
    console.log(bio)
    console.log(blog)
    console.log(email)
    console.log(twitter)
    console.log(repos)

    document.getElementById('login').innerHTML = name;
    document.getElementById('Repositorios').innerHTML = repos;
    document.getElementById('Bio').innerHTML = bio;
    document.getElementById('Blog').innerHTML = blog;
    document.getElementById('Email').innerHTML = email;
    document.getElementById('Twitter').innerHTML = twitter;
})
.catch(error => console.error(error));

     
//completar peticion y mostrar cantidad de repos en html así como la cantidad de repos de javascript





