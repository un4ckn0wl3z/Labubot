const figlet = require('figlet');
const colors = require('colors');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Bangkok");


module.exports = {
    delay(time) {
        return new Promise(function(resolve) { 
            setTimeout(resolve, time)
        });
    },
    log: {
        info: (message) => {
            console.log(`${dayjs(Date.now()).format()} - ${colors.green(message)}`)
        },
        error: (error) => {
            console.log(`${dayjs(Date.now()).format()} - ${colors.red(error)}`)
        },
        warn: (message) => {
            console.log(`${dayjs(Date.now()).format()} - ${colors.yellow(message)}`)
        },   
    },
    banner() {
        figlet.text(
          "LABUBOT",
          {
            font: "Ghost",
            horizontalLayout: "default",
            verticalLayout: "default",
            width: 80,
            whitespaceBreak: true,
          },
          function (err, data) {
            if (err) {
              console.log("Something went wrong...");
              console.dir(err);
              return;
            }
            console.log(data);
          }
        );
      }
}

