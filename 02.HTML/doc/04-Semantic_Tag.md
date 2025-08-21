# HTML 教學 - 語意標籤
參考：
* [web.dev | Semantic HTML](https://web.dev/learn/html/semantic-html)
* [W3Schools | HTML Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)
     

範例：
* [04.html](../demo/04.html)

## 有使用語意標籤 (Semantic HTML)的好處
* 更清楚的結構
    * 標籤本身就說明了內容的意圖，程式碼語意清楚，方便他人閱讀與維護。  
      > 如 `<header>` 表示頁首，`<article>` 表示一篇文章。

* 詳細使用規則參見相關文件

非語意版本：
```html
<div class="header">
    <div class="nav">...</div>
</div>
<div class="content">
    <div class="article">...</div>
</div>
```

語意版本：
```html
<header>
    <nav>...</nav>
</header>
<main>
    <article>...</article>
</main>
```

## 常見語意標籤整理：
| 標籤          | 用途     | 說明   |
| ------------ | -------- | ------ |
| `<header>`  | 頁首內容   | 表示頁面或區塊的頁首，通常包含 logo、標題、導覽列等。     |
| `<nav>`     | 導覽列    | 導覽列區塊，用來放置主要導航連結 (例如主選單)。          |
| `<main>`    | 主內容區   | 表示頁面的主要內容區域，應為每頁唯一，排除頁首、側欄、頁尾等區域。 |
| `<article>` | 獨立文章   | 表示一篇獨立內容，常用於部落格文章、新聞報導、卡片區塊等，內容可獨立存在。    |
| `<section>` | 區段內容   |  表示網頁中的一個主題區段，適合用來劃分頁面內容，例如「最新消息」、「服務項目」。 |
| `<aside>`   | 側邊補充資訊 | 表示與主要內容間接相關的區塊，像是側邊欄、廣告、補充資訊或註解。          |
| `<footer>`  | 頁尾     | 表示頁面或區塊的頁尾，通常包含版權資訊、聯絡方式、頁尾連結等。   |


## 常見的網頁版面配置：
![常見的網頁版面配置](../img/common%20page%20layouts.png "Magic Gardens")