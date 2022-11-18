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
    
    it('Handling multiple Window', () => {
        browser.waitForAngularEnabled(false)
        browser.get('https://www.irctc.co.in/eticketing/errors.html#');
        browser.driver.manage().window().maximize()
        browser.sleep(8000).then(function(){
            console.log("Test Pause");
        })
        element(by.linkText('Contact Us')).click();
        browser.getAllWindowHandles().then(function(windowIDs){
            console.log(`Parent WindowID : ${windowIDs[0]} and Child ID : ${windowIDs[1]}`);
            browser.switchTo().window(windowIDs[1]);
            element.all(by.tagName('a')).each(function(link) {
                link.getText().then(function(email) {
                    console.log(`Child Page Mail ID  : ${email}`);
                })
            });
            browser.switchTo().window(windowIDs[0]);
            element.all(by.tagName('a')).each(function(link) {
                link.getText().then(function(hlink) {
                    console.log(`Parent Page Hyperlink Text  : ${hlink}`);
                })
            });

        })
    });

    it('Drag And Drop', () => {
        browser.waitForAngularEnabled(false)
        browser.get('https://jqueryui.com/droppable/');
        browser.driver.manage().window().maximize()
        browser.sleep(8000).then(function(){
            console.log("Test Pause");
        })
        browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
        element(by.id('droppable')).getText().then(function(text) {
            console.log(`Before Drag and drop : ${text}`);
        })
        browser.actions().dragAndDrop(element(by.id('draggable')), element(by.id('droppable'))).perform();
        element(by.id('droppable')).getText().then(function(text) {
            console.log(`After Drag and drop : ${text}`);
        })
    });

});