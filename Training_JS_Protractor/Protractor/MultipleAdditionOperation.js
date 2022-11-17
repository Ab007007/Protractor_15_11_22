describe('First Test', () => {
    
    function add(a,b) {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
                
        element(by.binding('latest')).getText().then(function(result){
            console.log(`Sum of two numbers ${result}`);
        })
    }
    it('Test Case-1', () => {
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(8000).then(function(){
            console.log("Test Ended");
        })
      
        add(25,25);
        add(25,26)
        add(88,89)
        add(55,66)

    });
});