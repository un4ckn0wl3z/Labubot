const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const { log } = require('../utils/util');

const dataPath = path.join(__dirname, '../../_data');
console.log(dataPath)
const configPath = path.join(dataPath, 'config.yml');

let config;
let cookie;
let storage;
let creds;

try {
  config = yaml.load(fs.readFileSync(configPath, 'utf8'));
  log.info('[+] config loaded');
} catch (error) {
  log.error('[-] Error load config: ' + error)
  process.exit(1)
}

try {
  cookie = yaml.load(fs.readFileSync(path.join(dataPath, config.cookie_base.cookie_file), 'utf8'));
  log.info('[+] cookie loaded');
} catch (error) {
  log.error('[-] Error load cookie: ' + error)
  process.exit(1)
}

try {
  storage = yaml.load(fs.readFileSync(path.join(dataPath, config.cookie_base.storage_file), 'utf8'));
  log.info('[+] storage loaded');
} catch (error) {
  log.error('[-] Error load storage: ' + error)
  process.exit(1)
}

creds = config.login_base.creds;
log.info('[+] creds loaded');

module.exports = {
    config,
    cookie,
    storage,
    creds,
}