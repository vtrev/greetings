//=========================DOM======================
var displayName = document.querySelector('#displayName');

var getInput = document.querySelector('#inputBox');

var greetBtn = document.querySelector('#greetBtn');
var displayCount = document.querySelector('#countNumber');

var counter = 0;

var getName = function () {
    var name = getInput.value;
    name = name.trim();
    //name = name.charAt(0).toUpperCase();
    return {
        name
    }
}


var showName = function () {


}

var clearBox = function () {
    getInput.value = "";
}



//==================LOGIC=============================
var GreetingsFactory = function () {



    var greetNow = function (inputName, language) {

        if (language === 'English') {
            return 'Hello ' + inputName + '!'
        }
        if (language === 'Zulu') {

            return 'Saubona ' + inputName + '!'
            

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
        return lang
    }


    return {
        greetNow,
        setLang
    }

}




var greet = GreetingsFactory();


//greetBtn.addEventListener('click',greetFunctio

//=======================EVENTS==========================
greetBtn.addEventListener('click', function run() {

    var radioValue = document.querySelector('input[name="radioLang"]:checked').value;

    getName();
    var langFromDom = greet.setLang(radioValue)
    var nameFromDom = getName().name;
    displayName.innerHTML = greet.greetNow(nameFromDom, langFromDom);
    clearBox();
    counter++;
    displayCount.innerHTML = counter;
    
    
    

})
