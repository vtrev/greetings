//=========================DOM======================

//adding querySelectors and refs

var displayName = document.querySelector('#displayName');

var getInput = document.querySelector('#inputBox');

var greetBtn = document.querySelector('#greetBtn');

var displayCount = document.querySelector('#countNumber');
//a global session counter to kee track of how many greets there are
var counter = 0;

//get the name of the user from the textbox
var getName = function () {
    var name = getInput.value;
    name = name.trim();
    //Make the first letter of the name Uppercase
    //name = name.charAt(0).toUpperCase();
    return {
        name
    }
}
//function to cear the textbox 

var clearBox = function () {
    getInput.value = "";
}

//set the total counts of greetings
var setCounter = function(){

    displayCount.innerHTML = localStorage.getItem('counter');
    
}
var checkCounter = function (){
    
    if(localStorage['counter'] === undefined){
        let zero = JSON.stringify(0);
        localStorage.setItem('counter',zero)
    }counter++;
    
}




//==================LOGIC=============================

// the greetings factory functions 

var GreetingsFactory = function () {


//function to takes in the user's name + their language as parameters and return a greeting accordingly
    var greetNow = function (inputName, language) {

        if (language === 'English') {
            return 'Hello ' + inputName + '!'
        }
        if (language === 'Zulu') {

            return 'Saubona ' + inputName + '!'
            

        }
    }

//function to take in(from the DOM) and return the user's desired language and return it
    var setLang = function (value) {
        var lang = '';
        if (value === 'English') {
            lang = 'English';
        }
        if (value === 'Zulu') {
            lang = 'Zulu';
        }
        return lang
    }




    return {
        greetNow,
        setLang
    }

}


//an instance of the Greetings factory function

var greet = GreetingsFactory();



//=======================EVENTS==========================
//an event listener for the gereet button

greetBtn.addEventListener('click', function run() {

    var radioValue = document.querySelector('input[name="radioLang"]:checked').value;
    getName();
    var langFromDom = greet.setLang(radioValue)
    var nameFromDom = getName().name;
    displayName.innerHTML = greet.greetNow(nameFromDom, langFromDom);
    clearBox();
    
    //counter shit

    checkCounter();
    
    var storageCount = JSON.parse(localStorage.getItem('counter')); //parseFloat(localStorage.getItem('counter'));
   
    localStorage.setItem('counter', storageCount += 1);
    
    setCounter();

})
