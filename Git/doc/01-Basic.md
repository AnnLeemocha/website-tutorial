# Git 基礎教學筆記

## 什麼是 Git？

Git 是一套分散式版本控制系統，用來追蹤檔案變更、協作開發，最常用於管理程式碼。

---

## Git 安裝與設定

### 1. 安裝 Git

- [下載 Git](https://git-scm.com/downloads) 並依作業系統安裝。

### 2. 初始設定（只需一次）

```bash
git config --global user.name "你的名字"
git config --global user.email "you@example.com"
```

---

## 建立 Git 倉庫

### 初始化專案
請先建立一個專案資料夾，並在此資料夾下執行：
```bash
git init
```

> 在當前資料夾建立 `.git` 資料夾，開始版本控制。

---

## 基本操作流程

```bash
# 查看目前狀態
git status

# 將檔案加入暫存區
git add 檔案名或 .

# 提交版本
git commit -m "提交訊息"

# 查看提交紀錄
git log
```

---

## 常用指令整理

| 指令                   | 說明             |
| -------------------- | -------------- |
| `git init`           | 初始化 Git 倉庫     |
| `git add <檔名>`       | 加入暫存區          |
| `git commit -m "訊息"` | 提交版本與訊息        |
| `git status`         | 查看當前狀態         |
| `git log`            | 查看歷史紀錄         |
| `git diff`           | 查看修改差異         |
| `git rm <檔名>`        | 移除檔案並加入 commit |
| `git mv <舊檔> <新檔>`   | 重新命名檔案         |

---

## 分支操作（Branch）

```bash
# 建立新分支
git branch 新分支名

# 切換分支
git checkout 分支名

# 建立並切換
git checkout -b 新分支名

# 合併分支
git merge 來源分支

# 刪除分支
git branch -d 分支名
```

---

## 遠端操作（GitHub / GitLab）

### 1. 連接遠端倉庫

```bash
git remote add origin https://github.com/用戶名/倉庫名.git
```

### 2. 推送到遠端（第一次需設定主分支）

```bash
git push -u origin main
```

### 3. 從遠端拉取更新

```bash
git pull origin main
```

---

## 忽略檔案（.gitignore）

建立 `.gitignore` 檔案，加入要忽略的路徑或副檔名：

```
node_modules/
*.log
.env
.DS_Store
```

---

## 回到過去：版本還原

```bash
# 還原尚未加入的修改
git checkout -- 檔名

# 取消已加入暫存區的檔案
git reset HEAD 檔名

# 回到上一個 commit 狀態（危險）
git reset --hard HEAD
```

---

## 補充資源

* Git 官方網站：[https://git-scm.com/](https://git-scm.com/)
* Git 教學網站：[Pro Git 中文版](https://git-scm.com/book/zh-tw/v2)

---

## 常見工作流程（開發者日常）

1. `git clone` 專案
2. 建立分支 `git checkout -b feature-name`
3. 編輯程式、提交 `add + commit`
4. 合併到主分支 `merge`
5. 推送到 GitHub `git push origin`

## VS Code 輔助套件
* Git Graph
