//=========================DOM======================

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
        //let zero = ;
        localStorage.setItem('counter',JSON.stringify(0));
    }

}
var checkMap = function () {
    //console.log(localStorage.getItem('userMap'));
    if (!localStorage.getItem('userMap')) {
        var emptyObj = {}
        //map =
        localStorage.setItem('userMap', JSON.stringify(emptyObj));
        console.log('map created');
        console.log(JSON.parse(localStorage.getItem('userMap')));

    } else {
        //map =

        console.log('map was there ');
        console.log(JSON.parse(localStorage.getItem('userMap')));

    }

}





//==================LOGIC=============================

// the greetings factory functions 

var GreetingsFactory = function (userMap) {

    var greetMap = userMap;
    var greetNow = function (inputName, language) {

        if (greetMap[inputName] === undefined) {
            greetMap[inputName] = 0;
            var counter = JSON.parse(localStorage.getItem('counter'));

            localStorage.setItem('counter', JSON.parse(counter + 1));

        }
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

    //functieeton to take in(from the DOM) and return the user's desired language and return it


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

    var greet = GreetingsFactory(JSON.parse(localStorage.getItem('userMap')));

    var radioBtn = document.querySelector('input[name="radioLang"]:checked');
    var nameFromDom = getName().name;
    if (nameFromDom !== "") {
        if (radioBtn !== null) {

            getName();
            //console.log(greet.setLang('Zulu'));
            var langFromDom = greet.setLang(radioBtn.value);

            console.log(JSON.parse(localStorage.getItem('userMap')));

            //counter 
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


resetBtn.addEventListener('click', function run() {
    localStorage.setItem('counter', JSON.stringify(0));
    localStorage.setItem('userMap', JSON.stringify({}));

    displayCount.innerHTML = 0;

});
