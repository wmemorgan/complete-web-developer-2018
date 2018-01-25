
var database = [
    {
        username: "george",
        password: "secret"
    }
];

var newsFeed = [
    {
        username: "george",
        timeline: "Have you poured any good drunks lately?"
    },
    {
        username: "howard",
        timeline: "I'M AS MAD AS HELL, AND I'M NOT GOING TO TAKE THIS ANYMORE!"
    },
    {
        username: "norma",
        timeline: "All right, Mr. DeMille, I'm ready for my close-up."
    }
];

var userNamePrompt = prompt("Enter your username");
var passwordPrompt = prompt("Enter password");

function signIn(username, password) {
    if (username === database[0].username && 
        password === database[0].password) {
            console.log(newsFeed);
        } else {
            alert("Sorry, wrong username and password!");
        }
}

signIn(userNamePrompt, passwordPrompt);
