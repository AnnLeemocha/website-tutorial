# Git 使用 SSH Key 與 GitHub 連線

使用 SSH Key 與 GitHub 連線，讓 Git 透過 SSH 安全地與 GitHub 通訊。

---

## 1. 檢查是否已經有 SSH Key

先打開終端機 (Terminal)，輸入以下指令來檢查：

```bash
ls -al ~/.ssh
```

如果有像 `id_rsa` 和 `id_rsa.pub` 這樣的檔案，就代表你已經有 SSH key 了。如果沒有，我們來產生一組。

---

## 2. 產生新的 SSH Key

執行以下指令(請把 `you@example.com` 改成你自己的 GitHub Email) ：

```bash
ssh-keygen -t ed25519 -C "you@example.com"
```

如果你系統不支援 ed25519，也可以用 RSA：

```bash
ssh-keygen -t rsa -b 4096 -C "you@example.com"
```

接著會看到以下提示：

```
Enter file in which to save the key (/home/you/.ssh/id_ed25519):
```

可以直接按下 `Enter` 使用預設路徑，或自己輸入一個檔名。

之後會問你是否要設密碼，可以選擇輸入或直接按 Enter 跳過。

---

## 3. 加入 SSH Agent

確保 ssh-agent 正在執行，並加入你的 key：

```bash
# 啟動 ssh-agent(視你的 shell 而定) 
eval "$(ssh-agent -s)"

# 加入你的 SSH 金鑰
ssh-add ~/.ssh/id_ed25519
```

---

## 4. 將 SSH 公鑰加到 GitHub

接下來把你的公鑰加入 GitHub：

### 取得你的公鑰內容：

```bash
cat ~/.ssh/id_ed25519.pub
```

複製整段開頭為 `ssh-ed25519` 的文字。

### 加到 GitHub：

1. 登入 GitHub
2. 點右上角大頭貼 → **Settings**
3. 左側選單 → **SSH and GPG keys**
4. 點右上角 **New SSH key**
5. 填入：

   * Title：給這把金鑰取個名字，例如 "My Laptop"
   * Key：貼上剛剛複製的公鑰
6. 點 **Add SSH key**

---

## 5. 測試連線是否成功

```bash
ssh -T git@github.com
```

成功的話會看到類似：

```
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

---

## 6. 使用 SSH URL 來操作 GitHub Repo

從 GitHub 上 clone 專案時，請選擇 **SSH** 格式的 URL，例如：

```bash
git@github.com:your-username/your-repo.git
```

例如：

```bash
git clone git@github.com:octocat/Hello-World.git
```

---

如果你是從 HTTPS 轉 SSH，可以執行：

```bash
git remote set-url origin git@github.com:your-username/your-repo.git
```

---

## 常見錯誤排查

* **Permission denied (publickey)**：

  * SSH key 沒有加到 GitHub。
  * 金鑰沒加到 `ssh-agent`。
  * 使用了 HTTPS 而不是 SSH 的 repo URL。

---
