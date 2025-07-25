# HTML 教學 - 文件結構
參考：
* [web.dev | Document structure](https://web.dev/learn/html/document-structure)

範例：
* [structure.html](../example/structure.html)

## 文件結構說明

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
  </head>
  <body>
  </body>
</html>
```

---

### 1. `<!DOCTYPE html>` — 宣告文件類型（Doctype）

* 表示這是一份 **HTML5 文件**。
* 告訴瀏覽器使用「**標準模式（standards mode）**」來解析這個網頁。
* 不屬於 HTML 標籤，是 **HTML 文件的開頭必要宣告**。

---

### 2. `<html lang="en-US">` — HTML 根元素（root element）

* 所有的 HTML 標記都必須寫在 `<html>` 標籤裡面。
* `lang="en-US"` 屬性用來指定此文件的語言（英文 / 美國）。

  * 有助於搜尋引擎與輔助工具（例如螢幕閱讀器）了解內容語言。

---

### 3. `<head>` — 頁面的「頭部」，放非可見內容

* 描述網頁用的資料
* 包含**網站的中繼資訊（metadata）**，例如：

  * 頁面標題 (`<title>`)
  * 字元編碼 (`<meta charset="UTF-8">`)
  * 外部 CSS / 字體載入 (`<link>`)
  * SEO 設定、OG 設定、favicon 等

範例（常見 head 結構）：

```html
<head>
  <meta charset="UTF-8">
  <title>My Website</title>
</head>
```

---

### 4. `<body>` — 頁面的「內容區塊」

* 放置所有使用者可以看到的網頁內容：

  * 文字、圖片、影片、表單、按鈕、表格等
* 是 HTML 文件的主體部分

範例：

```html
<body>
  <h1>Welcome!</h1>
  <p>This is my website.</p>
</body>
```
補充：
* Lorem Ipsum 是一段用來 填充文字排版 的虛擬內容，常見於設計、網頁或排版工作中，用來模擬真實文章或內容。
* VS Code 有內建支援，例如輸入 lorem、lorem20（產生 20 字）

---

### 5. `</html>` — HTML 結束標籤

* 標示 HTML 文件結束。
* 所有內容都應包在 `<html>` 標籤之內。

---

### 小結

| 區塊                | 說明                 |
| ----------------- | ------------------ |
| `<!DOCTYPE html>` | 宣告 HTML5 文件類型      |
| `<html>`          | 根元素，包住整個 HTML 文件   |
| `<head>`          | 放置設定資訊（不可見）        |
| `<body>`          | 放置使用者可見的畫面內容       |
| `lang` 屬性         | 指定語言代碼，有助 SEO、輔助工具 |

---

