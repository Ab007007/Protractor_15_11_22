var data = require("./data/data.json")
var object = require("./data/Object.json")


describe('Addition Feature', () => {
   
    it('Alert Handler', () => {
        browser.waitForAngularEnabled(false)
        browser.get(data.url);
        browser.driver.manage().window().maximize()
        browser.sleep(8000).then(function(){
            console.log("Test Pause");
        })
       element(by.id(object.locators.switchWindowPage.openAlert)).click();
       browser.switchTo().alert().getText().then(function(textOnAlert){
            console.log(textOnAlert);
       })
       browser.switchTo().alert().accept();

    });
    
    it('Handling multiple Window', () => {
        browser.waitForAngularEnabled(false)
        browser.get(data["irctc-url"]);
        browser.driver.manage().window().maximize()
        browser.sleep(8000).then(function(){
            console.log("Test Pause");
        })
        element(by.linkText(object.locators.irctcHomePage.contactUs)).click();
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

});