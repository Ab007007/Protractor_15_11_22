describe('Addition Feature', () => {
   
    it('Test Case-1', () => {
        browser.waitForAngularEnabled(false)
        browser.get('http://formy-project.herokuapp.com/form');
        browser.driver.manage().window().maximize()
        browser.sleep(8000).then(function(){
            console.log("Test Ended");
        })
    });
});