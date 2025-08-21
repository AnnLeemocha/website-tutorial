# CSS 教學 - 總覽
全名 Cascading Style Sheet，主要用來裝飾、美化、輔助排版。

參考：
* [彭彭的教學課程 | CSS 基本教學](https://docs.google.com/presentation/d/1dY4PyAzQA-3_pXnGzFHRY1TOSqtcFtR33T6AjtEt7wU/edit?usp=sharing)
* [MDN | CSS styling basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics)
* [W3Schools | CSS Tutorial](https://www.w3schools.com/css/default.asp)

範例：
* [01.html](../demo/01.html)
  * [基礎](#常見屬性整理與說明---基礎)： font, text, color
* [01.css](../demo/01.css)
* [04.html](../demo/04.html)
  * [盒模型](#常見屬性整理與說明---盒模型)： display, pandding, margin, border, width, height, position
* [05.html](../demo/05.html)
  * [排版](#常見屬性整理與說明---排版)： display, flex, grid, RWD
* [05-2.html](../demo/05-2.html)
* [06.html](../demo/06.html)
  * [過度與動畫](#常見屬性整理與說明---過度與動畫)： transition, animation

---

## 常見屬性整理與說明 - 基礎
### font 相關屬性  
相關連結：https://developer.mozilla.org/en-US/docs/Web/CSS/font  
相關連結：https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling
| 屬性            | 說明                                      | 範例                                |
| ------------- | --------------------------------------- | --------------------------------- |
| `font-size`   | 文字大小。單位可為 `px`, `em`, `%`, `rem` 等。     | `font-size: 16px;`                |
| `font-weight` | 文字粗細，如 `normal`, `bold`, 或數值 `100~900`。 | `font-weight: bold;`              |
| `font-family` | 設定字型。可指定多個字型備用。                         | `font-family: Arial, sans-serif;` |

---

### 相容性注意事項
CSS 設定中只要牽扯到尺寸相關的部份，例如長度、寬度、大小，請務必加上單位。

> font-size:10px;  
> ~~font-size:10~~  
> padding:5px  
> ~~padding:5~~  

單位參考連結：https://web.dev/learn/css/sizing#relative_lengths

---

### text 相關屬性
相關連結：https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text  
相關連結：https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text_decoration
| 屬性                | 說明                                                   | 範例                            |
| ----------------- | ---------------------------------------------------- | ----------------------------- |
| `text-align`      | 文字對齊方式：`left`, `center`, `right`, `justify`          | `text-align: center;`         |
| `text-decoration` | 文字裝飾：`none`, `underline`, `line-through`, `overline` | `text-decoration: underline;` |

---

### color 相關屬性
相關連結：https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
| 屬性                 | 說明                   | 範例                          |
| ------------------ | -------------------- | --------------------------- |
| `color`            | 文字顏色。可使用色碼、英文、rgb 等。 | `color: #333;`              |
| `background-color` | 背景顏色                 | `background-color: yellow;` |
| `background-image` | 區塊背景圖片或設定                 | `background-image: url('img.jpg');`、`background-image: linear-gradient(to right, red, yellow);` |
* 色碼表示：顏色名稱、十六進位(Hexadecimal) 顏色值、RGB、RGBA、HSL、HSLA 等。

---

### 設定標籤區塊的背景
相關連結：https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders
```css
.my-background {
  background-color: lightblue;
  background-image: url('example.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

---

## 常見屬性整理與說明 - 盒模型

### margin 相關屬性
相關連結：https://developer.mozilla.org/en-US/docs/Web/CSS/margin
| 屬性                                                           | 說明          | 範例                   |
| ------------------------------------------------------------ | ----------- | -------------------- |
| `margin`                                                     | 元素與外部距離 (四邊) | `margin: 20px;`      |
| `margin-top`, `margin-right`, `margin-bottom`, `margin-left` | 可分別設定四邊     | `margin-left: 10px;` |

---

### padding 相關屬性
相關連結：https://developer.mozilla.org/en-US/docs/Web/CSS/padding
| 屬性                                                               | 說明             | 範例                  |
| ---------------------------------------------------------------- | -------------- | ------------------- |
| `padding`                                                        | 內容與邊框之間的距離 (四邊) | `padding: 15px;`    |
| `padding-top`, `padding-right`, `padding-bottom`, `padding-left` | 分別設定內距         | `padding-top: 5px;` |

---

### border 相關屬性
相關連結：https://developer.mozilla.org/en-US/docs/Web/CSS/border
| 屬性              | 說明               | 範例                                     |
| --------------- | ---------------- | -------------------------------------- |
| `border`        | 設定整體邊框 (寬度、樣式、顏色) | `border: 1px solid #000;`              |
| `border-radius` | 邊框圓角             | `border-radius: 8px;`                  |
| `box-shadow`    | 陰影效果             | `box-shadow: 0 0 5px rgba(0,0,0,0.2);` |

---

### width 與 height 屬性
相關連結：https://developer.mozilla.org/en-US/docs/Web/CSS/width  
相關連結：https://developer.mozilla.org/en-US/docs/Web/CSS/height
| 屬性          | 說明            | 範例                 |
| ----------- | ------------- | ------------------ |
| `width`     | 設定寬度          | `width: 300px;`    |
| `height`    | 設定高度          | `height: 150px;`   |
| `max-width` | 最大寬度 (通常配合響應式) | `max-width: 100%;` |


---

## 常見屬性整理與說明 - 排版

### display 顯示模式設定
相關連結：https://developer.mozilla.org/en-US/docs/Web/CSS/display
| 顯示方式           | 說明                   |
| -------------- | -------------------- |
| `block`        | 佔滿整行，例如 `<div>`      |
| `inline`       | 只佔內容寬度，例如 `<span>`   |
| `inline-block` | 像 inline 一樣排列，但可設定寬高 |
| `none`         | 隱藏元素                 |
| `flex`         | 啟用彈性排版 (進階)           |

---

### 排版 Flexbox
```css
.container {
  display: flex;
}
```

#### 主軸排列屬性 (`flex-direction`)
| 值                | 說明       |
| ---------------- | -------- |
| `row`            | 水平排列（預設） |
| `column`         | 垂直排列     |
| `row-reverse`    | 反向水平排列   |
| `column-reverse` | 反向垂直排列   |

#### 主軸/水平對齊 (`justify-content`)
```css
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
```

#### 側軸/垂直對齊 (`align-items`)
```css
align-items: stretch | flex-start | flex-end | center | baseline;
```

#### 子元素控制
```css
.item {
  /* 占據剩餘空間 */
  flex: 1;              
  /* grow shrink basis */
  flex: 1 1 auto;       
  /* 
    等同於：
    
      如果容器還有空間，該項目可以「擴張」佔據剩餘空間
      flex-grow: 1;

      如果空間不足，項目會「縮小」來適應容器
      flex-shrink: 1;

      項目的初始寬度由內容大小或 CSS 設定寬度決定，不指定固定寬度
      flex-basis: auto;

      此設定讓元素有彈性地增減大小以填滿容器，同時不會完全固定寬度。
  */
}
```

---

### 排版 Grid
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* 
    重複三次 1fr

    fr 是「fraction」單位，代表「剩餘空間的比例」

    3 欄平均寬度，橫向平分容器（1:1:1）
  */
  gap: 16px;
  /* 
    設定「網格間距」，適用於 flex 和 grid

    會影響欄與列之間的間距（列間距為 row-gap，欄間距為 column-gap）

    子項目之間會有 16px 的空隙，不會影響 padding 或 margin。
  */
}
```

#### 網格定義
```css
grid-template-columns: 200px 1fr 1fr;
/* 
  設定網格的 3 欄寬度：

    * 第一欄固定寬度 200px
    * 第二、三欄彈性寬度（平均分配剩餘空間）

  第一欄為側邊欄（例如 nav），其他內容區則平分剩餘空間。
*/
grid-template-rows: auto 100px;
/* 
    設定網格的 2 列高：

      * 第一列高度由內容自動決定（auto）
      * 第二列固定高度為 100px

    上方區塊彈性高度，下方區塊固定高度（如 footer）。
*/
```

#### 區域命名
```css
.container {
  grid-template-areas:
    "header header header"
    "nav content aside"
    "footer footer footer";
}
.item-header {
  grid-area: header;
}
```

---

### 定位 (Position) 屬性
相關連結：https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Positioning
| 屬性值        | 說明                |
| ---------- | ----------------- |
| `static`   | (預設值) 依照正常文流排列      |
| `relative` | (相對定位) 相對原本位置偏移          |
| `absolute` | (絕對定位) 相對最近的定位祖先元素進行絕對定位 |
| `fixed`    | (固定定位) 相對瀏覽器視窗固定，不會隨滾動移動 |

範例：
```css
.my-position {
  position: absolute;
  top: 10px;
  left: 20px;
}
```

### RWD 響應式設計 (Responsive web design)
一種網頁設計方法，可使網頁在所有螢幕尺寸和解析度上都能很好地呈現，同時確保良好的可用性。 這是設計多裝置網路的方式。

#### Media Query 語法
```css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

#### 常見斷點
```css
/* 手機 */
@media (max-width: 480px) { }

/* 平板 */
@media (max-width: 768px) { }

/* 桌機 */
@media (min-width: 1024px) { }
```

#### 搭配技巧
* 使用 `%` 或 `vw/vh` 作為寬高單位
* 使用 `flex-wrap: wrap` 做多欄彈性排版
* 使用 Grid 的 `auto-fit` 或 `minmax()` 實現彈性列數

### 範例：三欄排版 + 響應式
```css
.container {
  display: flex;
  gap: 16px;
}

.item {
  flex: 1 1 calc(33.333% - 16px);
}

@media (max-width: 768px) {
  .item {
    flex: 1 1 100%;
  }
}
```

---

### 版面配置相關連結
* web.dev： https://web.dev/learn/css/layout  
* MDN：https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout

 
  
---

## 常見屬性整理與說明 - 過度與動畫

### Transition (過渡)
`transition: [要動畫的屬性] [持續時間] [速度曲線] [延遲時間];`

範例：
```html
<button class="button">滑鼠游標懸停時變色</button>
```

```css
.button {
  background-color: blue;
  transition: background-color 0.5s ease;
}

.button:hover {
  background-color: red;
}
```

---

### Animation (動畫)
`animation: [名稱] [持續時間] [速度曲線] [延遲] [次數] [方向] [播放狀態];`

使用範例：
```html
<div class="box">Animation 動畫範例</div>
```
```css
/* 
  @keyframes：
    定義動畫的每個階段 (百分比或 from → to) 
*/
@keyframes move {
  0%   { transform: translateX(0); }
  100% { transform: translateX(200px); }
}

/* .box 中的 animation 屬性用來啟用動畫 */
.box {
  animation: move 2s ease-in-out infinite;
}
```

說明範例：  
`animation: move 3s ease-in 1s 2 alternate forwards;`
| 屬性          | 說明              |
| ----------- | --------------- |
| `move`      | `@keyframes` 名稱 |
| `3s`        | 動畫持續時間          |
| `ease-in`   | 動畫速度曲線          |
| `1s`        | 延遲開始時間          |
| `2`         | 播放次數 (2 次)       |
| `alternate` | 每次反方向播放         |
| `forwards`  | 結束後保留最後狀態       |

---

## 補充

### CDN (Content Delivery Network，內容傳遞網路)
定義
> CDN 是一組分散在全球各地的伺服器網路，用來快速將網站或應用的靜態資源 (圖片、CSS、JavaScript、影片等)傳送給使用者。

工作原理
* 當使用者要下載某個網站的資源時，CDN 會根據使用者的地理位置，從離使用者最近的伺服器節點 (稱為邊緣節點 Edge Node)提供內容。
* 這樣可以降低延遲，提高下載速度，並減輕原始伺服器的負擔。

好處
| 優點      | 說明                   |
| ------- | -------------------- |
| 加速載入速度  | 靠近使用者的伺服器提供資源，網速更快   |
| 降低伺服器壓力 | 多台伺服器分擔流量，避免主伺服器過載   |
| 提升網站穩定性 | 某個節點故障時，可由其他節點繼續提供服務 |
| 抗攻擊能力   | 可抵擋部分 DDoS 攻擊        |
| 節省頻寬費用  | 部分 CDN 提供商有流量優化方案    |

常見用途
* 靜態檔案分發 (圖片、CSS、JS)
* 影片串流
* 字型載入
* API 加速 (部分情況下)