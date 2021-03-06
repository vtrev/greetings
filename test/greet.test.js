describe('greet function', function () {
    //var greet = 

    it('Should dsiplay the user\'s name correctly', function () {
        
        var greet = GreetingsFactory({});
        assert.equal('Hello Spock!', greet.greetNow('Spock','English'));
        assert.equal('Saubona Vusi!',greet.greetNow('Vusi','Zulu'));
        assert.equal('Avuxeni Mpume!',greet.greetNow('Mpume','Tsonga'));
        
    });
    
    
   it('Should return a name with Uppercase first letter even if the input was lowercase ', function () {
       var greet = GreetingsFactory({});
       assert.equal('Hello Vusi!',greet.greetNow('vusi','English'));
   });

   it('Should not increase the counter if the name has been greeted', function () {
    var greet = GreetingsFactory({});
    greet.greetNow('Vusi','English');
    var countGreet1 = JSON.parse(localStorage.getItem('count'));
    greet.greetNow('Vusi','Zulu');
    var countGreet2 = JSON.parse(localStorage.getItem('count'));
    
    
    
    assert.equal(countGreet1,countGreet2);
});

});
