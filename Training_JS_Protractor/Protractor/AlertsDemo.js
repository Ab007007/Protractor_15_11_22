describe('Addition Feature', () => {
   
    it('Alert Handler', () => {
        browser.waitForAngularEnabled(false)
        browser.get('http://formy-project.herokuapp.com/switch-window');
        browser.driver.manage().window().maximize()
        browser.sleep(8000).then(function(){
            console.log("Test Pause");
        })
       element(by.id('alert-button')).click();
       browser.switchTo().alert().getText().then(function(textOnAlert){
            console.log(textOnAlert);
       })
       browser.switchTo().alert().accept();

    });


});