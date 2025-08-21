# HTML 教學 - 常用標籤
參考：
* [彭彭的教學課程 | HTML 基本教學](https://docs.google.com/presentation/d/15CepcqdWgCw783suEgiiUC7z7LLJr_-ZERtBDkm1cto/edit?usp=sharing)
* [W3Schools | HTML Element Reference](https://www.w3schools.com/tags/default.asp)

範例：
* [02.html](../demo/02.html)
* [03.html](../demo/03.html)

## 常見標籤整理：
[MDN | HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
| 標籤                        | 說明                                                    |
| ------------------------- | ----------------------------------------------------- |
| `<title>`                 | 設定網頁標題，通常放在 `<head>` 中，顯示在瀏覽器分頁標籤上。                   |
| `<h1>` \~ `<h6>`          | 標題標籤，`<h1>` 為最高層級 (主標題)，依序為 `<h2>` \~ `<h6>`，層級越大字體越小。 |
| `<p>`                     | 段落文字。用來分段普通文字內容。                                      |
| `<br>`                    | 換行標籤，會在文字中斷行 (不需閉合標籤)。                                 |
| `<hr>`                    | 水平線，用來分隔內容區塊，具視覺分隔效果。                                 |
| `<a href="">`             | 超連結標籤，使用 `href` 指向目標網址或內部錨點。                          |
| `<img src="" alt="">`     | 插入圖片，`src` 指圖片路徑，`alt` 提供替代文字 (可提升無障礙體驗與 SEO)。         |
| `<ul>` / `<ol>` / `<li>`  | 清單標籤：`<ul>` 為無序清單、`<ol>` 為有序清單，內容放在 `<li>` 項目中。       |
| `<div>`                   | 區塊標籤，用於排版或分隔區域，常配合 CSS 使用。                            |
| `<span>`                  | 行內元素，用來包裝文字或小範圍內容，通常用於局部樣式設定。                         |
| `<b>` / `<strong>`        | 粗體文字。`<strong>` 帶有「語意強調」；`<b>` 只是樣式加粗。                |
| `<i>` / `<em>`            | 斜體文字。`<em>` 表示語意上的強調；`<i>` 僅為樣式斜體。                    |
| `<input>`                 | 表單元素：`<input>` 為輸入欄位。                  |
| `<button>`                | 表單元素：`<button>` 為按鈕。                  |
| `<form>`                  | 表單容器，可包含輸入欄位、按鈕等，並透過 `action` 與 `method` 提交資料。        |
| `<table>`	                | 表示表格，用來呈現結構化資料。須搭配 `<thead>`、`<tbody>`、`<tr>`、`<td>`、`<th>` 使用。   |
| `<thead>`	                  | 表格的表頭區域，內部通常放 `<tr>` 與 `<th>`，用來描述欄位標題。 |
| `<tbody>`	                  | 表格的主體區域，內含多個 `<tr>`，每列用 `<td>` 呈現資料。 |
| `<tr>`	                  | 表格列 (table row)，每列資料的容器。 |
| `<th>`	                  | 表格標題儲存格 (table heading)，內容預設為粗體並置中。    |
| `<td>`	                  | 表格資料儲存格 (table data)，放置實際資料內容。           |
| `<svg>`                  | 用於定義 Web 的可縮放向量圖形 |

* SVG 學習資源：
    * [MDN | SVG](https://developer.mozilla.org/en-US/docs/Glossary/SVG)
    * [W3Schools Tutorial | SVG](https://www.w3schools.com/graphics/svg_intro.asp)

## 驗證
[The W3C Markup Validation Service](https://validator.w3.org/#validate_by_upload)
* 可將 html 檔案丟入並查看錯誤。