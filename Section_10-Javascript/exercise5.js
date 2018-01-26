//Exercise 5 - Keyless Car Enhancement

function checkDriverAge() {
    var age = prompt("Enter your age");
    if (Number(age) < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    } else {
        alert("Powering On. Enjoy the ride!");
    }
}

// Function Expression Version
var checkDriverAge2 = function() {
    var age = prompt("Enter your age");
    if (Number(age) < 18) {
        alert("Sorry, you are too young to drive this car. Powering off");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    } else {
        alert("Powering On. Enjoy the ride!");
    }
}

// BONUS: Remove prompt and just pass arguments directly into function
function checkDriverAge3(age) {
    if (age < 18) {
        return "Sorry, you are too young to drive this car. Powering off";
    } else if (age === 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    } else {
        return "Powering On. Enjoy the ride!";
    }
}