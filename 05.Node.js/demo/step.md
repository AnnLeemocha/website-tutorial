1. Node
    * node -v (引擎)
    * node --help
    * node
    * node hello.js
2. npm
    * npm -v (工具，套件管理工具)
    * npm --help
    * npm init
        * name, main
        * script
            * npm run test
            * npm run hello
    * npm install chalk
        * npm install figlet ora
        * rm -r node_modules
        * npm install
        * npm uninstall figlet ora
        * 在 index.js 使用套件 -> npm run start
        * npm install -g nodemon
    * env
        * NODE_ENV=production node index.js
        * NODE_ENV=production npm run start
        * .env
        * npm install --save-dev cross-env
        * 讓 index.js 支援 .env
3. npx
    * npx -v (npm 內建的輔助工具，直接執行 npm 套件，而不用先安裝到全域或本地)
    * npx --help
    * npx cowsay "Hello Node.js"
        * npm list cowsay -g
        * npm list nodemon -g
    * Next.js 全端框架： 
        * npx create-next-app@latest
    * React + Vite 前端框架： 
        * npm create vite@latest my-app -- --template react
        * npx create-vite@latest my-app --template react
4. Git
    * git init
    * .gitignore
        * https://docs.github.com/zh/get-started/git-basics/ignoring-files#further-reading
    * git add .
    * git commit -m "node.js demo"
    * git show / git log
    * 建立 GitHub 儲存庫
        * 請先建立好 GitHub 與本機電腦溝通的 KEY 或 Token
    * 連結遠端儲存庫並 push
