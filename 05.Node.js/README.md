# Node.js 教學

本教學適合 **已熟悉 HTML、CSS、JavaScript 的初學者**，希望學習如何在伺服器端使用 JavaScript，並掌握 Node.js 的基礎開發流程。
整體以「循序漸進 + 實作導向」的方式設計，透過每章的範例與練習，逐步建立完整的 CLI 小專案。

---

## 目錄索引

歡迎使用這份教學文件，以下是各章節連結，請依序閱讀

| 章節 | 主題              | 檔案                                     |
| -- | --------------- | -------------------------------------- |
| 01 | Node.js 基礎與架構   | [doc/01-Basic.md](doc/01-Basic.md)     |
| 02 | npm 與套件管理       | [doc/02-NPM.md](doc/02-NPM.md)         |
| 03 | npx 與 CLI 工具    | [doc/03-NPX.md](doc/03-NPX.md)         |
| 04 | package.json 詳解 | [doc/04-Package.md](doc/04-Package.md) |
| 05 | 專案發佈            | [doc/05-Publish.md](doc/05-Publish.md) |
| HW | 專案實作作業          | [doc/Homework.md](doc/Homework.md)     |

> 每個章節為獨立檔案，依照順序閱讀可快速建立完整概念。
> 若有錯誤或建議，歡迎發 PR 或開 Issue 

---

## 學習目標

完成本教學後，學員將能夠：

1. 理解 Node.js 的運作原理與架構
2. 使用命令列執行與除錯 Node.js 程式
3. 熟悉 npm 與 npx 的使用方式
4. 建立並管理 Node.js 專案與模組
5. 使用第三方套件並掌握版本控制概念
6. 將專案發佈到 GitHub 或 npm

---

## 前置知識

開始前，請確認你已具備以下條件：

* 熟悉 HTML、CSS、JavaScript 基本語法
* 了解命令列基本操作（如 `cd`, `ls`, `mkdir`）
* 已安裝 Node.js（建議使用 LTS 版本）
* 已安裝 Git（用於版本控制與發佈）

---

## 推薦學習順序與建議進度

| 章節 | 主題                | 建議學習時間 |
| -- | ----------------- | ------ |
| 01 | Node.js 基礎與架構     | 1 天    |
| 02 | npm 與套件管理         | 1 天    |
| 03 | npx 與 CLI 工具      | 半天     |
| 04 | package.json 深入理解 | 半天     |
| 05 | 專案發佈流程            | 半天     |
| HW | 專案實作 todo-cli     | 1~2 天  |

> 建議每天學習 2~3 小時，共約 4~5 天可完成全部章節。

---

## 參考連結

參考資源：
* Node.js 官方網站：https://nodejs.org/zh-tw
* Node.js 官方文件：https://nodejs.org/docs/latest/api/
* npm 官方網站：https://www.npmjs.com
* npm 官方文件：https://docs.npmjs.com/
* GitHub 官方網站：https://github.com/
* GitHub 官方文件：[https://docs.github.com/](https://docs.github.com/zh)

第三方套件：
* dotenv 套件文件：[https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)
* chalk 套件文件：[https://www.npmjs.com/package/chalk](https://www.npmjs.com/package/chalk)

其他教學資源：
* Node.js 官方學習資源：https://nodejs.org/zh-tw/learn/getting-started/introduction-to-nodejs
* W3Schools - Node.js Tutorial: https://www.w3schools.com/nodejs/default.asp

---

## GPT 提示詞建議

若想透過 GPT 輔助學習，可以參考以下提示詞：

```text
請用簡單範例說明 Node.js 的事件迴圈（Event Loop）
```

```text
幫我示範一個 Node.js CLI 範例，可以從命令列輸入名字並回傳問候語
```

```text
解釋 package.json 中 dependencies 與 devDependencies 的差別
```

```text
請列出將 Node.js 專案發佈到 npm 的完整步驟
```

---


