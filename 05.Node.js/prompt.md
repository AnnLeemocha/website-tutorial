# 文檔生成提式詞

你是一名資深 Node.js 教學專家，教學對象是已熟悉 HTML、CSS、JS 的初學者。  
請撰寫一套 Node.js 教學文件，要求：

1. 以 Markdown 格式撰寫，每個章節生成一個獨立 MD 檔案，檔名如 doc/01-Basic.md、doc/02-NPM.md 等。  
2. 章節內容需循序漸進、邏輯清晰、程式碼示範可執行且前後連貫。  
3. 語言簡單易懂，並用實例、範例程式碼或小練習幫助理解。  
4. 禁止使用 emoji。  
5. 每章節結束可提供小練習或實作挑戰。  

章節規劃：

1. README.md
    * 目錄索引
    * 學習目標與前置知識
    * 推薦學習順序與建議進度
    * 參考連結
    * GPT 提示詞

2. doc/01-Basic.md
    * Node.js 介紹與架構
    * Node.js vs 瀏覽器環境
    * 安裝與環境設定
    * Node CLI 操作 
        * 須說明有哪些 command、參數、環境變數 (附官網連結)
        * 第一支程式：Hello World
    * 模組系統：CommonJS / ES Modules
    * 內建模組與自訂模組

    > 實作：node index.js 顯示 "Hello, Node!"，加入簡單輸入互動，例如讀取使用者名字

3. doc/02-NPM.md
    * npm 基本概念與安裝 
        * 需說明 npm 網站
    * npm CLI 指令
        * 須說明有哪些 command、參數、環境變數、全域 vs 本地安裝 (附官網連結)
    * 專案初始化與 package.json 說明
        * 須說明什麼是 package.json，以及說明一些參數 (name, scripts 等)
    * 本地套件建立與使用
        * 補充環境變數說明 (.env 與 scripts 使用)
    * 使用第三方套件
        * 須說明 dependencies, devDependencies (與其版本設定 ^ 等等),  License (用第三方套件要注意)
        * 什麼是 package-lock.json
        * 什麼是 node_modules (第三方套件存放位置)
    * 與 pnpm 的比較

    > 實作：npm init -y、安裝 chalk，用來在 CLI 顯示彩色文字、建立如 npm run hello

4. doc/03-NPX.md
    * 什麼是 npx、npx 與 npm 的差別
    * npx cli 指令
        * 須說明有哪些 command、參數、環境變數 (附官網連結)
    * 執行本地與遠端 CLI 工具
        * 執行第三方工具 (如前端 React 框架)

    > 實作：示範 npx 可以執行本地或遠端 CLI 工具

5. doc/04-Package.md
    * package.json 用途與結構
        * package-lock.json 是甚麼
        * node_modules 是甚麼
    * 重要欄位說明 
        * name, version, scripts, dependencies, type, exports, main  (提一些打包時會使用的參數)
    * 使用 scripts 自動化指令 (使用環境變數)
    * version / engines / license / private 等企業常用設定 
        * 版本控制與 License 說明
    * 與 npm、npx 的關聯

    > 純說明檔 (無實作)

6. doc/05-Publish.md
    * 發佈至 GitHub
    * 發佈至 npm（提供官方文件連結及簡單流程說明，PS 我也沒試過）

    > 實作：將前面實做出的專案發佈至 GitHub (初始化、.gitignore、commit、push 到 GitHub)

7. doc/Homework.md
    * 可自訂專案練習
    * GPT 建議：實作 todo-cli 專案
        * 功能：
            * CLI 新增、列出、刪除待辦項目
            * 使用本地 JSON 檔案保存資料
            * 使用第三方套件 chalk 美化輸出
        * 目的：
            * 將課堂學到的 Node.js 基礎、npm 套件、模組、scripts 整合應用
        * 作業挑戰：
            * 實現 CLI 互動（如 node index.js add "買牛奶"）
            * 加入環境變數控制檔案位置 (TODO_FILE=todo.json)
            * 美化輸出（顏色、格式化）

請注意文件要求，依章節填充完整教學內容，每個章節程式碼連貫可執行。
請一個章節一個章節來建立，等我確定完內容，說"下一章節"才進行下一章節的內容填充。

