//========================= DOM && STORAGE ITEMS ======================

//adding querySelectors and refs

var displayName = document.querySelector('#displayName');

var getInput = document.querySelector('#inputBox');

var greetBtn = document.querySelector('#greetBtn');
var resetBtn = document.querySelector('#resetBtn');

var displayCount = document.querySelector('#countNumber');
//get the name of the user from the textbox 
var getName = function () {
    var name = getInput.value;

    return {
        name
    }
}

//function to cear the textbox 

var clearBox = function () {
    getInput.value = "";
}

//display the total counts of greetings
var setCounter = function () {

    displayCount.innerHTML = localStorage.getItem('counter');
}
setCounter();

var checkCounter = function () {
    //counter init 
   if (localStorage['counter'] === undefined) {
       localStorage.setItem('counter', JSON.stringify(0));
   }

}

//a function to create a map if there's no map in the local storage
var checkMap = function () {
    if (!localStorage.getItem('userMap')) {
        localStorage.setItem('userMap', JSON.stringify({}));
    }
}


var submitForm =function(){
    checkMap();
    //an instance of the greet Factory
    var greet = GreetingsFactory(JSON.parse(localStorage.getItem('userMap')));

    var radioBtn = document.querySelector('input[name="radioLang"]:checked');
    var nameFromDom = getName().name;
    console.log('type of name from DOM : '+typeof(parseFloat(nameFromDom)));
    //ensure no empy name and there is a chaecked radio button
    if (nameFromDom){
        if (radioBtn !== null) {
            //getName();
            var langFromDom = greet.setLang(radioBtn.value);
            checkCounter();
            displayName.innerHTML = greet.greetNow(nameFromDom, langFromDom);
            localStorage.setItem('userMap', JSON.stringify(greet.greetMap));
            setCounter();
            clearBox();
        } else {
            displayName.innerHTML = ('Please choose your language first');
        }
    } else {
        displayName.innerHTML = 'Please type in a valid name first';

    }
        return false;
};
    // ======================EVENTS==============================

//Event listener for the reset button

resetBtn.addEventListener('click', function run() {
    localStorage.setItem('counter', JSON.stringify(0));
    localStorage.setItem('userMap', JSON.stringify({}));
    displayCount.innerHTML = 0;
    displayName.innerHTML = 'Hello World!';
});
