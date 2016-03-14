document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add-button').addEventListener('click', add);
    document.getElementById('subtract-button').addEventListener('click', subtract);
    document.getElementById('multiply-button').addEventListener('click', multiply);
    document.getElementById('divide-button').addEventListener('click', divide);
});

function add() {
    console.log('adding');
}

function subtract() {
    console.log('subtracting');
}

function multiply() {
    console.log('multiply');
}

function divide() {
    var op1 = document.getElementById('op1').value;
    var op2 = document.getElementById('op2').value;
    
    var promise = new Promise(function(resolve, reject) {
        // Login in here can take as long as necessary
        // Eventually, we either resolve or reject
        var randomNumber = Math.floor(Math.random() * 10) + 1;
        
        setTimeout(function() {
            if (randomNumber % 4 === 0) {
                // If the random number was 4 or 8, reject with a 'network error'. Just because. For example.
                reject('A network error has occurred.');
            } else {
                // Otherwise if the random number was 1,2,3,5,6,7,9,10
                // Perform the division (as long as op2 2 isn't zero)
                if (op2 == 0) {
                    reject('You cannot divide by zero!');
                } else {
                    var answer = op1 / op2;
                    //resolve(answer);
                }
            }
        }, randomNumber * 1000);
    }).then(function(success) {
        console.log('success'); // Logs the word 'success'
        console.log(success); // Logs the result of the math operation; whatever was "resolved" in the promise
        alert('The result of adding ' + op1 + ' and ' + op2 + ' is ' + success + '.');
    }, function(error) {
        console.log('error'); // Logs the word 'error'
        alert(error); // Alerts the specific error/reason; whatever was "rejected" in the promise above
    });
    
}  
    
 
 /**
  * This point and below has nothing to do with the slow calculator. Just showing
  examples of how you could call various promises and "wait" on their answers 
  using then. Also explored chaining multiple then statements */   
    
    dictionaryLibrary.getWordOfTheDay().then(function(word) {
        console.log('The word of the day is: ' + word);
    }, function(err) {
        console.log('An error occurred.');
        console.log(err);
    });
    
    dictionaryLibrary.getQuoteOfTheDay().then(function(quote) {
        console.log('some quote');
    });
    
    dictionaryLibrary.getWordOfTheDay().then(console.log, console.error);
    
    
    
    myLib.getLoggedInUser().then(function(user) {
        return myLib.getFavoritesListForUser(user.id);
    }).then(function(favorites) {
        return myLib.getStarredFavorites(favorites);
    }, function(err) {
        console.log('uh oh!');
        console.log(err);
    }).then(function(starred) {
        // Here we would loop through all the starred items, adding each one to the page
    }).catch(function(err) {
        console.log(err);
    });