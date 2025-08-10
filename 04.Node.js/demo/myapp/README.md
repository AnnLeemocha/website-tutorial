# 參考 Express 官網建置簡單網站


## 推薦套件

* Nodemon：  
  是一個用於 Node.js 應用的開發工具，它可以在你修改原始碼檔案後自動重新啟動伺服器，免去手動重啟的麻煩。非常適合與 Express 一起使用，能大幅提升開發效率。只需使用 npx nodemon app.js 或將其加入 npm script，即可輕鬆啟用。
  * 安裝：
    ```bash
    npm install --save-dev nodemon
    ```
  * 修改 `package.json`
    ```json
    {
        "scripts": {
            "start": "node app.js", // 原本執行方式
            "dev": "nodemon app.js" // 使用 nodemon 執行工具
        }
    }
    ```

---