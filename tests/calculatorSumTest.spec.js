describe('Protractor App - Calculator Test', function() {
    it('Add two numbers',  function () {

        /*
        // Overriding Protractor webdriver to use Healenium Proxy running on port 8085, which internally should redirect to SELENIUM_SERVER_URL on port 4444
        // Following syntax on Protractor documentation - https://www.protractortest.org/#/webdriver-vs-protractor

        var browser = new protractor.Builder()
            .usingServer('http://localhost:8085')
            .forBrowser('chrome')
            .build();
        */

        browser.get('http://juliemr.github.io/protractor-demo/');

        //Assert Title of Loaded Page
        expect(browser.getTitle()).toEqual('Super Calculator');

        //Sum of Two Numbers
        console.log('Enter first number');
        var textBox1 = element(by.css('body > div.container.ng-scope > div > form > input:nth-child(1)'));
        textBox1.sendKeys(5);

        console.log('Enter first number');
        var textBox2 = element(by.css('body > div.container.ng-scope > div > form > input:nth-child(3)'));
        textBox2.sendKeys(10);

        console.log('Click on Go Button')
        var btn = element(by.id('gobutton'));
        btn.click();

        browser.sleep(5000);
    });

});