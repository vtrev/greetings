//==================LOGIC=============================





// the greetings factory function 
var GreetingsFactory = function (greetMap) {
    var greetNow = function (inputName, language) {
        //counter init
        if (localStorage['counter'] === undefined) {
            localStorage.setItem('counter', JSON.stringify(0));
        }

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
