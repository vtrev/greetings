describe('greet function', function () {
    //var greet = 

    it('Should dsiplay the user\'s name correctly', function () {

        var greet = GreetingsFactory();


        assert.equal('Hello Spock!', greet.greetNow('Spock','English'));
        
    });
    
    
    it('Should test if the setLang function sets the correct language ', function () {
        var greet = GreetingsFactory();
        
        var name = 'Vusi'
        var lang = greet.setLang('English');
        var name1 = 'Spock'
        var lang1 = greet.setLang('Zulu');
        
        assert.equal('Saubona Spock!',greet.greetNow(name1,lang1));
        
        assert.equal('Hello Vusi!', greet.greetNow(name,lang));


    })

});
