# 專案發佈指南：GitHub 與 npm

---

## 1. 發佈至 GitHub

將本地專案上傳至 GitHub，可方便團隊協作、版本管理與遠端備份。

### (1) 初始化 Git 專案

在專案根目錄執行：

```bash
git init
```

會建立一個 `.git` 資料夾，Git 開始追蹤版本。

---

### (2) 建立 .gitignore

建立 `.gitignore`，避免將不必要的檔案上傳到 GitHub。
常見範例：

```
node_modules/
.env
.DS_Store
dist/
```

> 小技巧：GitHub 官方提供 [Node.gitignore](https://github.com/github/gitignore/blob/main/Node.gitignore)

---

### (3) 新增檔案與 commit

```bash
git add .
git commit -m "初始化專案與設定.gitignore"
```

* `git add .`：將所有變更加入暫存區。
* `git commit -m "訊息"`：提交版本。

---

### (4) 建立 GitHub 儲存庫

1. 登入 [GitHub](https://github.com/)
2. 點擊「New Repository」
3. 填寫名稱、描述，選擇公開或私人
4. 不勾選初始化 README（已在本地專案建立）

> 請先建立好 GitHub 與本機電腦溝通的 KEY 或 Token

---

### (5) 連結遠端儲存庫並 push

假設遠端儲存庫 URL 為 `git@github.com:username/my-node-app.git`：

```bash
# 新增遠端儲存庫
git remote add origin git@github.com:username/my-node-app.git

# 推送到 GitHub（第一次推送使用 -u 參數設定預設 upstream）
git push -u origin main
```

> 若本地分支非 main，請先切換或建立 main 分支：

```bash
git branch -M main
```

---

## 2. 發佈至 npm

TODO: 待驗證

npm 是 Node.js 套件的官方發佈平台。
以下提供官方文件連結與簡單流程說明：

* 官方文件：[Publishing npm packages](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)

---

### (1) 註冊 npm 帳號

若尚未註冊，先到 [https://www.npmjs.com/signup](https://www.npmjs.com/signup) 建立帳號。

在終端機登入：

```bash
npm login
```

輸入：

* npm username
* password
* email

登入成功後，即可發佈套件。

---

### (2) 檢查 package.json

npm 會根據 package.json 發佈套件，請確認：

* `name` 唯一（若與現有套件重複，需修改）
* `version` 遵守 Semantic Versioning
* `main` 指向正確入口
* `license` 設定正確
* 若不想公開發佈，設為 `"private": true`（此時無法發佈到 npm）

---

### (3) 發佈套件

```bash
npm publish
```

* 若名稱包含 scope（如 `@username/package`），需要加上 `--access public`：

```bash
npm publish --access public
```

---

### (4) 更新套件版本

每次修改後，需更新 `package.json` 中的版本號：

```bash
npm version patch   # 修補
npm version minor   # 次版本
npm version major   # 主版本
```

然後重新執行 `npm publish`。

---

### (5) 使用套件

其他專案可直接安裝：

```bash
npm install <package-name>
# 或 scoped package
npm install @username/package
```

---

## 3. 小結

1. **GitHub 發佈**：

   * 初始化 Git (`git init`)
   * 建立 `.gitignore`
   * commit 變更
   * 新建 GitHub 儲存庫並 push

2. **npm 發佈**：

   * 登入 npm 帳號
   * 檢查 package.json 設定
   * 使用 `npm publish` 發佈
   * 更新版本號後可重複發佈

> 透過 GitHub + npm 發佈，可以同時達成版本管理、團隊協作與套件分享。

---