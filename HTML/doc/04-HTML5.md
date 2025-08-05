# HTML 教學 - HTML5

---

## HTML vs HTML5 差異總整理表

| 項目               | **HTML（傳統）**                | **HTML5（現代標準）**                                   |
| ---------------- | --------------------------- | ------------------------------------------------- |
| 發展階段          | HTML 4.01 為主流（1999 年）       | HTML5 是新標準（2014 正式發布，現已普及）                        |
| 結構語意          | 只靠 `<div>`、`<span>` 等無語意標籤  | 引入語意化標籤：`<header>`、`<nav>`、`<article>`、`<footer>` |
| 🖼 多媒體支援         | 無內建支援，需依賴 Flash、QuickTime 等 | 原生支援 `<audio>`、`<video>` 標籤                       |
| 表單功能          | 表單欄位功能簡單                    | 新增 `type="email"`、`date`、`range` 等多種欄位類型          |
|  JavaScript 模組 | 無支援                         | 支援 `<script type="module">`、Web API               |
|  應用 API        | 幾乎無內建 JS API                | 引入地理定位（Geolocation）、本地儲存、Canvas、WebSocket 等       |
| 儲存方式          | 僅支援 Cookie                  | 新增 `localStorage`、`sessionStorage`                |
| Doctype 宣告    | 冗長且不直覺                      | 簡潔明瞭：`<!DOCTYPE html>`                            |
| 相容性           | 舊瀏覽器支援良好                    | 現代瀏覽器全面支援                                         |

---

## HTML5 新增的重要功能分類

### 1. 語意化標籤（Semantic Tags）

```html
<header>、<nav>、<section>、<article>、<aside>、<footer>
```

### 2. 原生多媒體

```html
<video src="movie.mp4" controls></video>
<audio src="sound.mp3" controls></audio>
```

### 3. 表單輸入欄位

```html
<input type="email">、<input type="date">、<input type="range">
```

### 4. 繪圖與動畫

```html
<canvas></canvas>、<svg> 繪圖支援
```

### 5. Web API 支援

* Geolocation API
* Web Storage API (`localStorage`, `sessionStorage`)
* Drag and Drop API
* WebSocket

---

## 小結論

| 問題                  | 回答                         |
| ------------------- | -------------------------- |
| HTML5 是新語法嗎？        | 是 HTML 的下一代標準，向下相容       |
| HTML5 和 HTML 有什麼差別？ | HTML5 更語意化、更支援多媒體與 JS API  |
| 我現在該用哪個？            | **HTML5 是現代網頁的標準，請全面使用** |

---
