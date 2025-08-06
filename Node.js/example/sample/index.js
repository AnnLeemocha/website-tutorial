console.log("This is myapp!");

// 第三方套件 (axios) =================
const axios = require('axios');

// GitHub API 
axios.get('https://api.github.com/users/dify')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

// 內建模組 (fs) =================
const fs = require('fs');

// 寫入檔案
fs.writeFileSync('hello.txt', 'Hello from Node.js');

// 讀取檔案
const data = fs.readFileSync('hello.txt', 'utf-8');
console.log(data);
