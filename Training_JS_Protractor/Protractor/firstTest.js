describe('First Test', () => {
    
    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(8000).then(function(){
            console.log("Test Ended");
        })
    })

    it('Test Case-1', () => {
      
        element(by.model('first')).sendKeys(123);
        element(by.model('second')).sendKeys(123);
        element(by.id('gobutton')).click();
        
    });

    it('Test Case-2', () => {
        element(by.model('first')).sendKeys(123);
        element(by.model('second')).sendKeys(123);
        element(by.id('gobutton')).click();
        
    });

    it('Test Case-3', () => {

        element(by.model('first')).sendKeys(123);
        element(by.model('second')).sendKeys(123);
        element(by.id('gobutton')).click();
        
    });

    it('Test Case-4', () => {

        element(by.model('first')).sendKeys(123);
        element(by.model('second')).sendKeys(123);
        element(by.id('gobutton')).click();
        
    });
});