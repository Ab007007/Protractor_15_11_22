var globaldata = require("./data/data.json")
var object = require("./data/Object.json")
var using = require('jasmine-data-provider');

describe('Form filler', () => {
    function testData() {
        return [
            {fn: "A1", ln: "B1", jt: "C1"},
            {fn: "A2", ln: "B2", jt: "C2"},
            {fn: "A3", ln: "B3", jt: "C3"},
            {fn: "A4", ln: "B4", jt: "C4"},
            {fn: "A5", ln: "B5", jt: "C5"},
           ];
    }

    using(testData, function (data) {
        it('Alert Handler', () => {
            browser.waitForAngularEnabled(false)
            browser.get(globaldata["form-url"]);
            browser.driver.manage().window().maximize()
            browser.sleep(8000).then(function(){
                console.log("Test Pause");
            })
            element(by.id(object.locators["form-page"].fnTxtBox)).sendKeys(data.fn);
    
            element(by.id(object.locators["form-page"].lnTxtBox)).sendKeys(data.ln);
            element(by.id(object.locators["form-page"].jnTxtBox)).sendKeys(data.jt);
            element(by.linkText(object.locators["form-page"].submitButton)).click();
    
            var EC = protractor.ExpectedConditions;
            browser.wait(EC.visibilityOf(element(by.xpath("//div[@class='alert alert-success']"))), 5000);
           
            element(by.xpath("//div[@class='alert alert-success']")).getText().then(function(successmsg){
                console.log(`${successmsg}`);
            });
        });
    })


   
    


});