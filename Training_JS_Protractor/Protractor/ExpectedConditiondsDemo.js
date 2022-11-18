describe('Addition Feature', () => {
   
    it('Test Case-1', () => {
        browser.waitForAngularEnabled(false)
        browser.get('http://www.flipkart.com');
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath("//button[@class='_2KpZ6l _2doB4z']"))), 5000);
        element(by.xpath("//button[@class='_2KpZ6l _2doB4z']")).click();
        browser.sleep(8000).then(function(){
            console.log("Test Ended");
        })
    });
});