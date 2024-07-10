const { delay, log, banner } = require('../utils/util');
banner()
const puppeteer = require('puppeteer');
const CONSTANTS = require('../utils/constant');

async function run() {
  const start = performance.now()
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
  
    await page.goto(CONSTANTS.LOCATORS.LOGIN_PAGE)
    log.info('[+] Open login page')
  
    await page.setViewport({width: 1080, height: 1024});
    log.info('[+] setViewport to 1080x1024')
  
    await page.locator(CONSTANTS.LOCATORS.AGREEMENT).click()
    log.info('[+] accepted agreement')
  
    await page.locator(CONSTANTS.LOCATORS.LOGIN_FIELD).fill(CONSTANTS.CREDS.USERNAME);
    log.info('[+] filled in username')
  
    await page.locator(CONSTANTS.LOCATORS.LOGIN_BTN).click()
    log.info('[+] login...')
  
    await page.locator(CONSTANTS.LOCATORS.PASSWORD_FIELD).fill(CONSTANTS.CREDS.PASSWORD);
    log.info('[+] password')
  
    await page.locator(CONSTANTS.LOCATORS.LOGIN_BTN).click()
    log.info('[+] login...')
  
    await page.waitForFunction("document.getElementsByClassName('header_infoTitle__Fse4B')[0].textContent.includes('บัญชีของฉัน')")
    log.info('[+] captcha resolved')
  
    await page.goto(CONSTANTS.TARGET_PRODUCT);
    log.info('[+] visit target product')

    try {
      await page.waitForSelector(CONSTANTS.LOCATORS.BUY_NOW, { timeout: 3000 });
    } catch (error) {
      log.error('[-] Error: '+'BUY_NOW not available')
      process.exit(1)
    }
  
    await page.locator(CONSTANTS.LOCATORS.BUY_NOW).click()

    log.info('[+] buy now clicked')

    await page.waitForNavigation();

    await page.waitForSelector(CONSTANTS.LOCATORS.TRUE_MO_PAY)
    log.info("[+] found taget payment")

    await page.click(CONSTANTS.LOCATORS.TRUE_MO_PAY)
    log.info("[+] choose target payment")

    await page.waitForSelector(CONSTANTS.LOCATORS.ORDERING)
    log.info("[+] found ordering button")

    await page.hover(CONSTANTS.LOCATORS.ORDERING)
    log.info("[+] BUY!!")

    await page.waitForNavigation();
    log.info('[+] QR URL: ' + page.url())
    
    log.info("[+] ALL THING DONE! LET'S PAY!")
    log.warn("[!] CTRL+C When Everything Done!")
    log.warn(`[!] Total processing time: ${performance.now()-start} ms`)
    
    await delay(999999)
    await browser.close();

  } catch (error) {
    log.error('[-] Error: ' + error)
  }
}


run();
