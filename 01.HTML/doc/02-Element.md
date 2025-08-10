# HTML 教學 - 基本規則
全名 HyperText Markup Language，是所有網頁技術的基礎。

參考：
* [web.dev | Overview of HTML](https://web.dev/learn/html/overview)

範例：
* [01.html](../demo/01.html)

---

## HTML 的基本元素結構

- **元素 (element)**  
  HTML 的基本構成單位，例如 `<div>...</div>`、`<a>...</a>`、`<p>...</p>` 等

  - **標籤 (tag)**：開始與結束標籤，例如 `<p>` 和 `</p>`
  - **屬性 (attribute)**：提供元素額外資訊，例如 `class`、`id`、`href`
  - **內容 (content)**：元素內部的文字或其他元素

### 說明範例

```html
<a href="https://example.com" class="link"> 
  點我前往
</a>
```
* 整個 `<a>...</a>`：**元素 (element)**
* `<a>`：開始標籤 (opening tag) → **標籤 (tag)**
* `href="https://example.com" class="link"`：**屬性 (attribute)** 
    * `href`、`class`：**屬性名 (attribute name)**
    * `https://example.com`、`link`：**屬性值 (attribute value)**
* `點我前往`：**內文 (content)**
* `</a>`：結束標籤 (closing tag) → **標籤 (tag)**

### HTML 的大小寫規則

| 項目                   | 是否區分大小寫      | 說明                                 |
| -------------------- | ------------- | ---------------------------------- |
| 標籤名稱 (Tag)            | ❌      | `<DIV>`、`<div>` 等效                 |
| 屬性名稱 (Attribute)      | ❌      | `CLASS` 與 `class` 一樣               |
| 屬性值 (Attribute value) | ✅ **有些** | 像 `id`、`class` 是**使用者自定義**，因此區分大小寫 |

💡 **使用者自定義屬性值** (如 `id="Main"` vs `id="main"`)→ **區分大小寫**。

---

## HTML 註解
單行
```html
<!-- 任意註解文字 -->
```
多行
```html
<!-- 
    註解文字可任意換行
-->
```
* VS Code 快捷鍵 (Ctrl + /)

---

## HTML 實體 (Entity)
* 是一段以連字型大小 (&)開頭、以分號 (; )結尾的文字 (字串)。 
* 常用於顯示保留字元 (這些字元會被解析為 HTML 代碼)和不可見的字元 (如“不換行空格”)。 
* 也可以用來代替其他難以用標準鍵盤鍵入的字元。
* 常用實體列表：  
    https://developer.mozilla.org/en-US/docs/Glossary/Character_reference
    | 字元 | Named Reference | Unicode Code-point |
    |------|------------------|--------------------|
    | &    | `&amp;`           | U+00026            |
    | <    | `&lt;`            | U+0003C            |
    | >    | `&gt;`            | U+0003E            |
    | "    | `&quot;`          | U+00022            |
    | '    | `&apos;`          | U+00027            |
    |      | `&nbsp;`          | U+000A0            |
    | –    | `&ndash;`         | U+02013            |
    | —    | `&mdash;`         | U+02014            |
    | ©    | `&copy;`          | U+000A9            |
    | ®    | `&reg;`           | U+000AE            |
    | ™    | `&trade;`         | U+02122            |
    | ≈    | `&asymp;`         | U+02248            |
    | ≠    | `&ne;`            | U+02260            |
    | £    | `&pound;`         | U+000A3            |
    | €    | `&euro;`          | U+020AC            |
    | °    | `&deg;`           | U+000B0            |
* 更多實體：  
    https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references

---

## VS Code 推薦套件

* Live Server：  
  這個套件可以讓你在本機快速啟動一個開發用的伺服器，並即時預覽 HTML 頁面。每當你儲存檔案時，瀏覽器會自動重新載入頁面 (Live Reload)，大大提升前端開發效率。非常適合用來開發純 HTML/CSS/JavaScript 網頁。

---
