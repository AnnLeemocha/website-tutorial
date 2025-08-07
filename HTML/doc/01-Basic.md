# HTML 教學 - 總覽
全名 HyperText Markup Language，是所有網頁技術的基礎。

參考：
* [web.dev | Overview of HTML](https://web.dev/learn/html/overview)

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

## VS Code 推薦套件

* Live Server：  
  這個套件可以讓你在本機快速啟動一個開發用的伺服器，並即時預覽 HTML 頁面。每當你儲存檔案時，瀏覽器會自動重新載入頁面 (Live Reload)，大大提升前端開發效率。非常適合用來開發純 HTML/CSS/JavaScript 網頁。

---
