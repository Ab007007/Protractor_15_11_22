describe('First Test', () => {
    
    it('Test Case-1', () => {
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(8000).then(function(){
            console.log("Test Ended");
        })
        element(by.model('first')).sendKeys(123);
        element(by.model('second')).sendKeys(123);
        element(by.id('gobutton')).click();
        

        element(by.binding('latest')).getText().then(function(result){
            console.log(`Sum of two numbers ${result}`);
        })
    });
});