const { creds, cookie, storage, config } = require("../config/config_loader");

module.exports = {
    CREDS :{
        USERNAME: creds.username,
        PASSWORD: creds.password,
    },
    LOCATORS:{
        LOGIN_PAGE: config.locators.login_page,
        AGREEMENT: config.locators.agreement,
        LOGIN_FIELD: config.locators.login_field,
        LOGIN_BTN: config.locators.login_btn,
        PASSWORD_FIELD: config.locators.password_field,
        BUY_NOW: config.locators.buy_now,
        TRUE_MO_PAY: config.locators.true_mo_pay,
        ORDERING: config.locators.ordering
    },
    TARGET_PRODUCT: config.target_product,
    COOKIE: cookie,
    STORAGE: storage,
}