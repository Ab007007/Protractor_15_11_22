describe('Addition Feature', () => {
   
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

    it('Mouse Movement ', () => {
        browser.waitForAngularEnabled(false)
        browser.get('http://www.flipkart.com');
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.xpath("//button[@class='_2KpZ6l _2doB4z']"))), 5000);
        element(by.xpath("//button[@class='_2KpZ6l _2doB4z']")).click();
        browser.sleep(8000).then(function(){
            console.log("Test Paused");
        })

        
        browser.actions().mouseMove(element(by.xpath("//div[text()='Fashion']"))).perform();
        browser.sleep(8000).then(function(){
            console.log("Test Paused");
        })
        element.all(by.xpath("//div[text()='Fashion']/parent::div/following-sibling::div//a")).each(function(ele,index){

            ele.getText().then(function(suggestion){
                console.log(`${index} : ${suggestion}`);
            })
        })
        browser.actions().mouseMove(element(by.xpath("//div[text()='Electronics']"))).perform();
        browser.sleep(8000).then(function(){
            console.log("Test Paused");
        })
        browser.actions().mouseMove(element(by.xpath("//div[text()='Home']"))).perform();
        browser.sleep(8000).then(function(){
            console.log("Test Paused");
        })
        

    });
});