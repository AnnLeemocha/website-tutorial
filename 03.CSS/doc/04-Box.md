# CSS 教學 - Box 模型

參考：
* [web.dev | Box Model](https://web.dev/learn/css/box-model)
* [MDN | Box Model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model)
* [MDN | Debugging CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)

範例：
* [04.html](../demo/04.html)

---

## 盒子模型的領域
![盒子模型的領域](https://web.dev/static/learn/css/box-model/image/a-diagram-showing-four-m-af72960a9e79a.svg)

* 每個 HTML 標籤在畫面上，都代表一個方型區塊，我們稱做 Box。
* 對於這個方型區塊，可以利用 CSS 做許多細緻的設定，包括背景色、邊框等等。
* 元素實際寬度 = content 寬度 + padding + border

---

### 各部分說明：
| 區塊              | 說明                              |
| --------------- | ------------------------------- |
| **Content** (內容) | 元素真正顯示的內容，如文字、圖片等。              |
| **Padding** (內距) | 內容與邊框之間的空間，**背景顏色會延伸到這裡**。      |
| **Border** (邊框)  | 圍繞 padding 和內容的邊線，可以設定寬度、樣式和顏色。 |
| **Margin** (外距)  | 元素與其他元素之間的間距，不會有背景顏色。           |

### 補充：`box-sizing`
* `box-sizing: content-box;`（預設）→ width/height 只算內容，不含 padding 與 border
* `box-sizing: border-box;` → width/height 包含 padding + border

---

### 常見誤解
| 誤解                      | 正確理解                                     |
| ----------------------- | ---------------------------------------- |
| `width` 就是元素的實際寬度       | 錯！預設情況下只代表 `content` 區塊的寬度，不含 `padding` 和 `border`。 |
| `margin` 會影響背景顏色區域      | 不會，背景顏色只會延伸到 `padding` 為止。               |
| `padding` 和 `margin` 是一樣的東西 | `padding` 是內部空間，margin 是外部空間。            |

---

### 區塊盒子 (block boxes)
一個擁有 block 外部顯示類型的盒子。

表現出以下行為：
* 盒子會產生換行。
* width 和 height 屬性可以發揮作用。
* 內邊距、外邊距和邊框會將其他元素從目前盒子周圍「推開」。
* 如果未指定 width，則方塊將沿行向擴展，以填滿其容器中的可用空間。在大多數情況下，盒子會變得與其容器一樣寬，佔據可用空間的 100%。

> 某些 HTML 元素，預設使用 block 作為外部顯示類型。
> * 如：`<div>`、`<table>`、`<form>`、`<p>`、`<h1>`~`<h6>`...

---

### 行內盒子 (inline boxes)
一個擁有 inline 外部顯示類型的盒子。

表現出以下行為：
* 盒子不會產生換行。
* width 和 height 屬性將無法運作。
* 垂直方向的內邊距、外邊距以及邊框會被應用但是不會把其他處於 inline 狀態的盒子推開。
* 水平方向的內邊距、外邊距以及邊框會被應用且會把其他處於 inline 狀態的盒子推開。

> 某些 HTML 元素，如 `<a>`、 `<span>`、 `<em>` 以及 `<strong>`，預設使用 inline 作為外部顯示類型。
> * 如：`<span>`、`<a>`、`<img>`、`<strong>`、`<em>`...
