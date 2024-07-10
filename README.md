# Labubot

[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-blue.svg)](http://www.wtfpl.net/about/)

## Description

Popmart Automate Script

## Demo

- **Login Based**: [Watch Demo](https://youtu.be/zQ90W3Ss240)
- **Cookie Based**: [Watch Demo](https://youtu.be/dQOrt1x7VzU)

## Installation

1. Clone the repository and install dependencies using npm:

    ```bash
    git clone https://github.com/un4ckn0wl3z/Labubot.git
    cd Labubot
    npm install
    ```

2. Install the following Chrome extensions for cookie and local storage export:
   - [Export Cookie & JSON File](https://chromewebstore.google.com/detail/export-cookie-json-file-f/nmckokihipjgplolmcmjakknndddifde)
   - [StorageAce](https://chromewebstore.google.com/detail/storageace/cpbgcbmddckpmhfbdckeolkkhkjjmplo)

3. Configure your credentials and file names for cookie and local storage in the `_data/config.yml` file:

    ```yaml
    login_base:
      creds:
        username: 'your-username'
        password: 'your-password'

    cookie_base:
      cookie_file: 'cookie-file.json' # default is www.popmart.com.cookies.json
      storage_file: 'storage-file.json' # default is www.popmart.com.storage.json
    ```

    Replace `'your-username'`, `'your-password'`, `'cookie-file.json'`, and `'storage-file.json'` with your actual credentials and file names.

4. Edit your cookie and local storage data that you already exported from extension:
   - `_data/www.popmart.com.cookies.json` for cookies
   - `_data/www.popmart.com.storage.json` for for local storage

5. Set your target product URL in the `_data/config.yml` file:

    ```yaml
    target_product: 'https://www.popmart.com/th/products/xxxx'
    ```

## Usage

### Running Scripts

To run the script for bot login based:

```bash
npm run bot-login-based
```

To run the script for bot cookie based:

```bash
npm run bot-cookie-based
```

### Other Scripts

Additional scripts include (PM2 required):

- Start forecast bot cookie:

  ```bash
  npm run forecast-bot-cookie
  ```

- Stop forecast bot cookie:

  ```bash
  npm run stop-forecast-bot-cookie
  ```

## Dependencies

- `@types/colors`: ^1.2.1
- `@types/figlet`: ^1.5.8
- `colors`: ^1.4.0
- `dayjs`: ^1.11.11
- `figlet`: ^1.7.0
- `js-yaml`: ^4.1.0
- `puppeteer`: ^22.12.1
- `ts-node`: ^10.9.2

## Dev Dependencies

- `@tsconfig/node18`: ^18.2.4
- `typescript`: ^5.5.3

## License

This project is licensed under the WTFPL License. See the [LICENSE](LICENSE) file for details.
