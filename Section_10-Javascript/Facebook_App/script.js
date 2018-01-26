
var database = [
    {
        username: "george",
        password: "secret"
    },
    {
        username: "howard",
        password: "1234"
    },
    {
        username: "norma",
        password: "sunset1"
    },

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

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        } 
    }
    return false;
}

function signIn(username, password) {

    if (isUserValid(username, password)) {
            console.log(newsFeed);
        } else {
            alert("Sorry, wrong username and password!");
        }
}

signIn(userNamePrompt, passwordPrompt);
