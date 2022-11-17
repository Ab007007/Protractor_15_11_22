describe('First Test', () => {
    
    it('Test Case-1', () => {
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(8000).then(function(){
            console.log("Test Ended");
        })
        

    });
});