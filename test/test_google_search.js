var webdriver = require('selenium-webdriver');
var assert = require('assert');
var driver = undefined;

after(function(){
  driver.quit();
})

describe('Google', function(){
  it('search by keyword', function(done){
    this.timeout(10000);
    
    driver = new webdriver.Builder().
      withCapabilities(webdriver.Capabilities.firefox()).build();

    driver.get('http://www.google.com');
    driver.findElement(webdriver.By.name('q')).sendKeys('Firefox OS');
    driver.findElement(webdriver.By.name('btnK')).click();
    //driver.findElement(webdriver.By.name('btnI')).click(); // I'm Feeling Lucky
    driver.wait(function() {
      return driver.getTitle().then(function(title) {
           return title === 'Firefox OS - Google 搜尋';
      });
    }, 3000).then(function() {
      done()
    });
  })
})
