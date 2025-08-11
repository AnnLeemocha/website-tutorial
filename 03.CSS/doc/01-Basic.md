# CSS 教學 - 總覽
全名 Cascading Style Sheet，主要用來裝飾、美化、輔助排版。

參考：
* [彭彭的教學課程 | CSS 基本教學](https://docs.google.com/presentation/d/1dY4PyAzQA-3_pXnGzFHRY1TOSqtcFtR33T6AjtEt7wU/edit?usp=sharing)
* [MDN | CSS styling basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics)

範例：
* [01.html](../demo/01.html)
* [01.css](../demo/01.css)

---

## 什麼是 CSS？
網頁的「外觀」與「樣式」
* 控制 HTML 元素的顏色、大小、排版、位置、動畫等
* 讓網頁更美觀、易讀、具有品牌風格

## 套用 CSS 的方法

在 HTML 中使用 CSS 有三種常見方式：

1. **行內樣式 (Inline Style)**
   直接在 HTML 標籤中加入 `style` 屬性，並寫入 CSS 語法。

   ```html
   <p style="color: blue; font-size: 16px;">這是一段文字</p>
   ```

2. **內部樣式 (Internal Style)**
   在 HTML 文件的 `<head>` 區塊中使用 `<style>` 標籤，撰寫 CSS。

   ```html
   <style>
     p {
       color: red;
       font-size: 18px;
     }
   </style>
   ```

3. **外部樣式 (External Style)**
   將 CSS 寫在外部 `.css` 檔案中，並透過 `<link>` 標籤引入 HTML。

   ```html
   <link rel="stylesheet" href="styles.css">
   ```

### 建議使用方式：

* **開發初期或測試** 可使用行內樣式快速套用。
* **中小型網頁** 可用 `<style>` 區塊集中管理樣式。
* **正式專案或多人協作** 建議使用外部 CSS 檔案，方便維護與重用。

---

## CSS 的基本語法
CSS 規則是一個代碼塊，包含一個或多個選擇器和一個或多個聲明。

![The parts of a CSS rule](../img/The%20parts%20of%20a%20CSS%20rule.png)

- `.my-css-rule` → **選擇器 (selector)**
- `color:beige;` → **宣告 (Declaration)**
- `color` → **屬性 (Property)**
- `beige` → **屬性值 (Value)**

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

---

## `<div>` 與 `<span>` 標籤
* 這兩個標籤的特性就是：沒有特性。
* 兩者唯一的差異在於顯示模式
  * `<div>` 顯示模式為 block
  * `<span>` 為 inline
