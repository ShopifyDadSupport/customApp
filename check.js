// fetch('https://sealapp-6ptb.onrender.com/getadd/addIntervalDays')
// .then(response => response.json())
// .then(data => console.log(data.subscription_interval_days))
// .catch(error => console.error('Error fetching data:', error));var subscription_order_name = "#1024";

// Define the number of times you want to increment
// let counter = 0;

// function processValue(value) {
//     if (value === "#1024" && counter === 0) {
//         counter++;
//         return "#1024";
//     } else if (value === "#1024" && counter === 1) {
//         counter++;
//         return "#1025";
//     } else {
//         return value;
//     }
// }

// // Example usage:
// let firstValue = processValue("#1024"); // This will return "#1024"
// let secondValue = processValue("#1024"); // This will return "#1025"

// console.log(firstValue); // Output: "#1024"
// console.log(secondValue); // Output: "#1025"

// function incrementValue(inputValue) {
//     let numberPart = parseInt(inputValue.slice(1));
//     numberPart++;
//     return "#" + numberPart;
// }

// let value1 = "#1024";
// let updatedValue1 = incrementValue(value1);
// console.log(updatedValue1);  // Output: "#1025"

// let value2 = "#1025";
// let updatedValue2 = incrementValue(value2);
// console.log(updatedValue2);  // Output: "#1026"

// let counter = 0;
// var subscription_order_name = "#1024";
// function processValue(value) {
//     if (value === subscription_order_name && counter === 0) {
//         counter++;
//         return subscription_order_name;
//     } else if (value === subscription_order_name && counter === 1) {
//         counter++;
//         return subscription_order_name;
//     } else {
//         return value;
//     }
// }

// // Example usage:
// let firstValue = processValue("#1024"); // This will return "#1024"
// let secondValue = processValue("#1024"); // This will return "#1025"

// console.log(firstValue); // Output: "#1024"
// console.log(secondValue); // Output: "#1025"

// for (let i = 1; i <= 11; i++) {
//     let concatenatedValue = i + 1000;
//     console.log(i + ' to ' + concatenatedValue);
// }

// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let fiftyCharToken = '';

// for (let i = 0; i < 50; i++) {
//   const randomIndex = Math.floor(Math.random() * characters.length);
//   fiftyCharToken += characters.charAt(randomIndex);
// }

// console.log(fiftyCharToken);

const path = require('path');
const fs = require('fs');
require('dotenv').config();

function GetAccessToken(access_token_value, shop_domain) {
  const envFilePath = path.join(__dirname, ".env");
  const newVariables = {
    accessToken: access_token_value,
    shopName: shop_domain
  };

  fs.readFile(envFilePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading .env file:", err);
      return;
    }

    const envVariables = {};
    data.split("\n").forEach((line) => {
      const [key, value] = line.split("=");
      if (key && value) {
        envVariables[key] = value;
      }
    });

    const mergedVariables = { ...envVariables, ...newVariables };
    const updatedEnvContent = Object.keys(mergedVariables)
      .map((key) => `${key}=${mergedVariables[key]}`)
      .join("\n");

    fs.writeFile(envFilePath, updatedEnvContent, "utf-8", (err) => {
      if (err) {
        console.error("Error writing .env file:", err);
        return;
      }
      console.log(".env file updated successfully.");
    });
  });
}
console.log("shopname in env file:-", process.env.shopName);

// Example usage
GetAccessToken("myAccessToken", "myShopDomain1");


