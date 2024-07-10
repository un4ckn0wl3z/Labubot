const puppeteer = require('puppeteer');
const CONSTANTS = require('../utils/constant');
const { delay, log, banner } = require('../utils/util');
banner()

async function run() {
  const start = performance.now()
  try {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
  
    await page.goto(CONSTANTS.TARGET_PRODUCT)
    log.info('[+] Open login page')
  
    await page.setViewport({width: 1080, height: 1024});
    log.info('[+] setViewport to 1080x1024')
  
    await page.locator(CONSTANTS.LOCATORS.AGREEMENT).click()
    log.info('[+] accepted agreement')
  
    // const cookiesPath = path.join(__dirname, 'www.popmart.com.cookies.json');
    // const cookiesJson = fs.readFileSync(cookiesPath, 'utf-8');
    // const cookies = JSON.parse(cookiesJson);
    // log.info('[+] load cookie')
  
    await page.setCookie(...CONSTANTS.COOKIE);
    log.info('[+] set cookie')
  
    // const storagePath = path.join(__dirname, 'www.popmart.com.storage.json');
    // const storageJson = fs.readFileSync(storagePath, 'utf-8');
    // const storage = JSON.parse(storageJson);
    // log.info('[+] load local storage')
    const storage = CONSTANTS.STORAGE;
  
    await page.evaluate((storage) => {
      for (let key in storage) {
        localStorage.setItem(key, JSON.stringify(storage[key]));
      }
    }, storage);
    log.info('[+] set local storage')
  
    await page.reload();
    log.info('[+] reload web page')
  

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
    log.info('[+] QR URL: ' + page.url())
    await delay(999999)
    await browser.close();
  } catch (error) {
    log.error('[-] Error: ' + error)
  }

}

run();
