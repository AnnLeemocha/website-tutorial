# CSS 教學 - 總覽
全名 Cascading Style Sheet，主要用來裝飾、美化、輔助排版。

參考：
* [彭彭的教學課程 | CSS 基本教學](https://docs.google.com/presentation/d/1dY4PyAzQA-3_pXnGzFHRY1TOSqtcFtR33T6AjtEt7wU/edit?usp=sharing)
* [MDN | CSS styling basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics)

---

## CSS 的基本語法
CSS 規則是一個代碼塊，包含一個或多個選擇器和一個或多個聲明。

![The parts of a CSS rule](../img/The%20parts%20of%20a%20CSS%20rule.png)

- `.my-css-rule` → **選擇器 (selector)**
- `color:beige;` → **聲明 (Declaration)**
- `color` → **屬性名稱 (Property)**
- `beige` → **屬性內容 (Value)**

## CSS 註解
單行
```css
/* 任意註解文字 */
```
多行
```css
/* 
  任意註解文字
*/
```

## 套用 CSS 的方法

在 HTML 中使用 CSS 有三種常見方式：

1. **行內樣式（Inline Style）**
   直接在 HTML 標籤中加入 `style` 屬性，並寫入 CSS 語法。

   ```html
   <p style="color: blue; font-size: 16px;">這是一段文字</p>
   ```

2. **內部樣式（Internal Style）**
   在 HTML 文件的 `<head>` 區塊中使用 `<style>` 標籤，撰寫 CSS。

   ```html
   <style>
     p {
       color: red;
       font-size: 18px;
     }
   </style>
   ```

3. **外部樣式（External Style）**
   將 CSS 寫在外部 `.css` 檔案中，並透過 `<link>` 標籤引入 HTML。

   ```html
   <link rel="stylesheet" href="styles.css">
   ```

---

### 建議使用方式：

* **開發初期或測試** 可使用行內樣式快速套用。
* **中小型網頁** 可用 `<style>` 區塊集中管理樣式。
* **正式專案或多人協作** 建議使用外部 CSS 檔案，方便維護與重用。

---

## `<div>` 與 `<span>` 標籤
* 這兩個標籤的特性就是：沒有特性。
* 兩者唯一的差異在於顯示模式
  * `<div>` 顯示模式為 block
  * `<span>` 為 inline

## 常見的 CSS 屬性整理與說明
### font 相關屬性  
相關連結：https://developer.mozilla.org/en-US/docs/Web/CSS/font  
相關連結：https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling
| 屬性            | 說明                                      | 範例                                |
| ------------- | --------------------------------------- | --------------------------------- |
| `font-size`   | 文字大小。單位可為 `px`, `em`, `%`, `rem` 等。     | `font-size: 16px;`                |
| `font-weight` | 文字粗細，如 `normal`, `bold`, 或數值 `100~900`。 | `font-weight: bold;`              |
| `font-family` | 設定字型。可指定多個字型備用。                         | `font-family: Arial, sans-serif;` |

### text 相關屬性
相關連結：https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text  
相關連結：https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text_decoration
| 屬性                | 說明                                                   | 範例                            |
| ----------------- | ---------------------------------------------------- | ----------------------------- |
| `text-align`      | 文字對齊方式：`left`, `center`, `right`, `justify`          | `text-align: center;`         |
| `text-decoration` | 文字裝飾：`none`, `underline`, `line-through`, `overline` | `text-decoration: underline;` |

### color 相關屬性
相關連結：https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
| 屬性                 | 說明                   | 範例                          |
| ------------------ | -------------------- | --------------------------- |
| `color`            | 文字顏色。可使用色碼、英文、rgb 等。 | `color: #333;`              |
| `background-color` | 背景顏色                 | `background-color: yellow;` |
| `background-image` | 區塊背景圖片或設定                 | `background-image: url('img.jpg');`、`background-image: linear-gradient(to right, red, yellow);` |
* 色碼表示：顏色名稱、十六進位(Hexadecimal) 顏色值、RGB、RGBA、HSL、HSLA 等。

### margin 相關屬性
相關連結：https://developer.mozilla.org/en-US/docs/Web/CSS/margin
| 屬性                                                           | 說明          | 範例                   |
| ------------------------------------------------------------ | ----------- | -------------------- |
| `margin`                                                     | 元素與外部距離（四邊） | `margin: 20px;`      |
| `margin-top`, `margin-right`, `margin-bottom`, `margin-left` | 可分別設定四邊     | `margin-left: 10px;` |

### padding 相關屬性
相關連結：https://developer.mozilla.org/en-US/docs/Web/CSS/padding
| 屬性                                                               | 說明             | 範例                  |
| ---------------------------------------------------------------- | -------------- | ------------------- |
| `padding`                                                        | 內容與邊框之間的距離（四邊） | `padding: 15px;`    |
| `padding-top`, `padding-right`, `padding-bottom`, `padding-left` | 分別設定內距         | `padding-top: 5px;` |

### border 相關屬性
相關連結：https://developer.mozilla.org/en-US/docs/Web/CSS/border
| 屬性              | 說明               | 範例                                     |
| --------------- | ---------------- | -------------------------------------- |
| `border`        | 設定整體邊框（寬度、樣式、顏色） | `border: 1px solid #000;`              |
| `border-radius` | 邊框圓角             | `border-radius: 8px;`                  |
| `box-shadow`    | 陰影效果             | `box-shadow: 0 0 5px rgba(0,0,0,0.2);` |

### display 顯示模式設定
相關連結：https://developer.mozilla.org/en-US/docs/Web/CSS/display
| 顯示方式           | 說明                   |
| -------------- | -------------------- |
| `block`        | 佔滿整行，例如 `<div>`      |
| `inline`       | 只佔內容寬度，例如 `<span>`   |
| `inline-block` | 像 inline 一樣排列，但可設定寬高 |
| `none`         | 隱藏元素                 |
| `flex`         | 啟用彈性排版（進階）           |

### width 與 height 屬性
相關連結：https://developer.mozilla.org/en-US/docs/Web/CSS/width  
相關連結：https://developer.mozilla.org/en-US/docs/Web/CSS/height
| 屬性          | 說明            | 範例                 |
| ----------- | ------------- | ------------------ |
| `width`     | 設定寬度          | `width: 300px;`    |
| `height`    | 設定高度          | `height: 150px;`   |
| `max-width` | 最大寬度（通常配合響應式） | `max-width: 100%;` |

### 定位（Position）屬性
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

### 版面配置
相關連結：https://web.dev/learn/css/layout  
相關連結：https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout

## 相容性注意事項
CSS 設定中只要牽扯到尺寸相關的部份，例如長度、寬度、大小，請務必加上單位。

> font-size:10px;  
> ~~font-size:10~~  
> padding:5px  
> ~~padding:5~~  

單位參考連結：https://web.dev/learn/css/sizing#relative_lengths

### 延伸閱讀
* Responsive web design (RWD, 響應式)  
  一種網頁設計方法，可使網頁在所有螢幕尺寸和解析度上都能很好地呈現，同時確保良好的可用性。 這是設計多裝置網路的方式。 
