//========================= DOM && STORAGE ITEMS ======================

//adding querySelectors and refs

var displayName = document.querySelector('#displayName');

var getInput = document.querySelector('#inputBox');

var greetBtn = document.querySelector('#greetBtn');
var resetBtn = document.querySelector('#resetBtn');

var displayCount = document.querySelector('#countNumber');
//get the name of the user from the textbox 
var getName = function () {
    console.log('checking name...');
    var name = getInput.value;
    name = name.trim();
    //Make sure the first letter of the name is Uppercase
    tmpString = name.substr(1, name.length);
    firstCh = name.charAt(0).toUpperCase();
    return {
        name: firstCh + tmpString
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

//==================LOGIC=============================

// the greetings factory function 
var GreetingsFactory = function (greetMap) {
    var greetNow = function (inputName, language) {

        if (greetMap[inputName] === undefined) {
            greetMap[inputName] = 0;
            var counter = JSON.parse(localStorage.getItem('counter'));
            //increament to the counter if the user has not been registered to the map
            localStorage.setItem('counter', JSON.parse(counter + 1));

        }
        //return a greeting based on the given language
        if (language === 'English') {
            return 'Hello ' + inputName + '!'
        }
        if (language === 'Zulu') {

            return 'Saubona ' + inputName + '!'


        }

        if (language === 'Tsonga') {

            return 'Avuxeni ' + inputName + '!'


        }
    }

    //function that returns the checked language button 
    var setLang = function (value) {
        var lang = '';
        if (value === 'English') {
            lang = 'English';
        }
        if (value === 'Zulu') {
            lang = 'Zulu';
        }
        if (value === 'Tsonga') {
            lang = 'Tsonga';
        }
        return lang
    }
    //factory returns

    return {
        greetNow,
        setLang,
        greetMap
    }


}




//=======================EVENTS==========================

//an event listener for the gereet button

greetBtn.addEventListener('click', function run() {

    checkMap();
    //an instance of the greet Factory
    var greet = GreetingsFactory(JSON.parse(localStorage.getItem('userMap')));

    var radioBtn = document.querySelector('input[name="radioLang"]:checked');
    var nameFromDom = getName().name;

    //ensure no empy name and there is a chaecked radio button
    if (nameFromDom !== "") {
        if (radioBtn !== null) {
            getName();
            var langFromDom = greet.setLang(radioBtn.value);
            checkCounter();
            displayName.innerHTML = greet.greetNow(nameFromDom, langFromDom);
            localStorage.setItem('userMap', JSON.stringify(greet.greetMap));
            setCounter();
            clearBox();
        } else {
            alert('Please choose your language first');
        }
    } else {

        alert('Please type in your name first');
    }

});

//an event listener for the reset stats button
resetBtn.addEventListener('click', function run() {
    localStorage.setItem('counter', JSON.stringify(0));
    localStorage.setItem('userMap', JSON.stringify({}));
    displayCount.innerHTML = 0;

});
