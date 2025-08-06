# HTML 教學 - 語意標籤
參考：
* [web.dev | Semantic HTML](https://web.dev/learn/html/semantic-html)
     

範例：
* [no_semantic.html](../example/no_semantic.html)
* [semantic.html](../example/semantic.html)

## 有使用語意標籤 (Semantic HTML)的好處
* 更清楚的結構
    * 標籤本身就說明了內容的意圖，如 `<header>` 表示頁首，`<article>` 表示一篇文章。
* 更清楚的結構
    * 程式碼語意清楚，方便他人閱讀與維護。

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
| 標籤          | 用途     |
| ----------- | ------ |
| `<header>`  | 頁首內容   |
| `<nav>`     | 導覽列    |
| `<main>`    | 主內容區   |
| `<article>` | 獨立文章   |
| `<section>` | 區段內容   |
| `<aside>`   | 側邊補充資訊 |
| `<footer>`  | 頁尾     |

## 常見的網頁版面配置：
![常見的網頁版面配置](../img/common%20page%20layouts.png "Magic Gardens")