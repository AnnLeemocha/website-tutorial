# Git 基礎教學筆記

## 什麼是 Git？

Git 是一套 **分散式版本控制系統**，用來追蹤檔案變更與協作開發，最常用於管理程式碼。具備以下特性：

* 支援多人協作
* 可離線操作
* 歷史版本完整保留

---

## Git 安裝與設定

### 1. 安裝 Git

前往 [Git 官方網站](https://git-scm.com/downloads) 根據作業系統下載並安裝。

### 2. 初始設定 (只需執行一次)

```bash
git config --global user.name "你的名字"
git config --global user.email "you@example.com"
```

---

## 建立 Git 倉庫

### 初始化本地倉庫

1. 建立或進入專案資料夾：
2. 初始化版本控制：

    ```bash
    git init
    ```

    > 此指令會在資料夾中建立 `.git` 資料夾，開始進行版本控制。

---

## 遠端操作 (GitHub / GitLab)

### 1. 建立遠端倉庫 (GitHub)

1. 登入 [GitHub](https://github.com/)
2. 點選右上角「➕」→「New repository」
3. 輸入倉庫名稱與設定 (建議不要勾選初始化)
4. 點選「Create repository」

### 2. 連接本地倉庫到遠端

```bash
git remote add origin https://github.com/用戶名/倉庫名.git
```

### 3. 第一次推送 (設定主分支)

```bash
git push -u origin main
```

### 4. 從遠端拉取更新

```bash
git pull origin main
```

---

## 常見基本工作流程 (開發者日常)
此流程模擬一般開發者在專案中進行功能開發的常見步驟，包含從遠端下載專案、建立分支、開發、提交、合併與推送等。

### 1. 複製遠端專案
將 GitHub (或 GitLab)上的專案複製到本地：

```bash
git clone https://github.com/用戶名/倉庫名.git

cd 倉庫名
```

> `git clone` 會自動建立一個與遠端同步的本地資料夾。

### 2. 建立功能分支
為每一項新功能或修復建立獨立分支，避免直接在 `main` 上修改：

```bash
git checkout -b 分支名稱
```

> 建議分支名稱命名格式：feature/xxx、bugfix/xxx、hotfix/xxx 等。

### 3. 查看目前狀態
在進行任何提交前，請確認目前的工作狀態：

```bash
git status
```

> 查看哪些檔案已變更、哪些檔案已加入暫存區。

### 4. 編輯與暫存
對檔案進行編輯後，將變更加入暫存區 (準備提交)：

```bash
git add .        # 加入所有變更檔案
```

果只需加入單一檔案：

```bash
git add 檔名     # 加入單一檔案
```

> 建議只加入需要的變更，避免不必要的檔案進入版本控制。

### 5. 提交變更
提交說明應清楚描述所做的修改：

```bash
# 提交版本
git commit -m "新增：功能說明"
```

> 使用有意義的提交訊息有助於日後查詢與維護。

### 6. 回到主分支並合併功能
功能完成後切回主分支並將功能分支合併進來：

```bash
git checkout main
git pull origin main           # 確保 main 為最新版本
git merge 分支名稱
```

> 若有衝突需手動解決後再提交。

### 7. 推送變更至遠端主分支
將合併後的 main 分支推送至遠端：

```bash
git push origin main
```

如需保留功能分支記錄或開 Pull Request，可推送功能分支：

```bash
git push origin 分支名稱
```

---

## 忽略檔案 (`.gitignore`)

建立 `.gitignore` 檔案，加入不希望被版本控制的項目：

```
node_modules/
*.log
.env
.DS_Store
```

---

## 回到過去：版本還原技巧

```bash
# 還原尚未加入暫存的修改
git checkout -- 檔名

# 取消暫存區的變更
git reset HEAD 檔名

# 回到上一個提交狀態 (⚠️ 危險操作)
git reset --hard HEAD
```

---

## 常用指令整理

| 指令                   | 說明          |
| -------------------- | ----------- |
| `git init`           | 初始化 Git 倉庫  |
| `git add <檔名>`       | 將檔案加入暫存區    |
| `git commit -m "訊息"` | 提交版本並加上訊息   |
| `git status`         | 查看目前狀態      |
| `git log`            | 查看歷史提交紀錄    |
| `git diff`           | 查看檔案變更差異    |
| `git rm <檔名>`        | 移除檔案並加入此次提交 |
| `git mv <舊檔> <新檔>`   | 重新命名檔案      |

---

## 分支操作整理

| 指令                     | 說明           |
| ---------------------- | ------------ |
| `git branch 分支名稱`      | 建立新分支        |
| `git checkout 分支名稱`    | 切換至指定分支      |
| `git checkout -b 分支名稱` | 建立並切換至新分支    |
| `git merge 來源分支名稱`     | 將來源分支合併進目前分支 |
| `git branch -d 分支名稱`   | 刪除指定分支       |


---

## 補充資源

* [Git 官方網站](https://git-scm.com/)
* [Pro Git 中文版](https://git-scm.com/book/zh-tw/v2)

---

## VS Code 推薦套件

* Git Graph：  
  提供圖形化介面來查看 Git 儲存庫的提交歷史紀錄。你可以清楚地看到分支、合併、提交的關係結構，並直接在視覺化介面中進行如提交、分支、合併、推送等操作。對於 Git 初學者或希望更直覺操作版本控制的開發者非常實用。

---
