const { Capabilities, Builder, By } = require('selenium-webdriver');
const { DriverService } = require('selenium-webdriver/remote');


require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get("http://localhost:5500/movieList/index.html")
})

afterAll(async () => {
    await driver.quit()
})

describe("all the movie stuff", () => {

test("should input movie", async () => {
    await driver.findElement(By.xpath('//input')).sendKeys("Godfather\n")
    await driver.sleep(2000)
})

test("should cross off a the Godfather", async () => {
    await driver.findElement(By.xpath('//span')).click()
    await driver.sleep(2000)
})

test("should add another movie", async () => {
    await driver.findElement(By.xpath('//input')).sendKeys('Thor\n')
    await driver.sleep(2000)
})

test("should add another movie", async () => {
    await driver.findElement(By.xpath('//input')).sendKeys('Sharknado\n')
    await driver.sleep(2000)
})


test("should delete Thor movie", async() => {
    await driver.findElement(By.xpath('//*[@id="Thor"]')).click()
    await driver.sleep(1000)
})

test("should delete Sharknado", async() => {
    await driver.findElement(By.xpath('(//li/button)[2]')).click()
    await driver.sleep(1000)
})

test("should check the deleted message", async () => {
    expect (await driver.findElement(By.xpath('//aside/span[containts(text(),"deleted!")]')).text)
})

test("should add another movie", async () => {
    await driver.findElement(By.xpath('//input')).sendKeys('Jaws\n')
    await driver.sleep(2000)
})

test("should cross off Jaws", async () => {
    await driver.findElement(By.xpath('(//li/span)[2]')).click()
    await driver.sleep(2000)
})


test("should check the watched message", async () => {
    expect (await driver.findElement(By.xpath('//aside/span[contains(text(),"watched!")]')).text)
})


})

