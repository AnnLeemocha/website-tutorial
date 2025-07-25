# CSS 教學 - 總覽
全名 Cascading Style Sheet，主要用來裝飾、美化、輔助排版。

參考：
* [彭彭的教學課程 | CSS 基本教學](https://docs.google.com/presentation/d/1dY4PyAzQA-3_pXnGzFHRY1TOSqtcFtR33T6AjtEt7wU/edit?usp=sharing)

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


## 選擇器
### 1. 簡單的選擇器
最直接的一組選擇器針對 HTML 元素以及類、ID 和其他可以添加到 HTML 標籤中的屬性。

* 通用選擇器：  
  (也稱為萬用字元) 可與任何元素相符。
  ```css
  * {
    color: hotpink;
  }
  ```
* 類型選取器：  
  直接比對 HTML 元素。
  ```css
  p {
    color: red;
  }
  ```
* 類別選取器：
  HTML 元素可在 class 屬性中定義一或多個項目。類別選取器會比對任何已套用該類別的元素。
  ```html
  <div class="my-class">DIV</div>
  <button class="my-class">BUTTON</button>
  <p class="my-class">P</p>
  ```
  ```css
  .my-class {
    color: red;
  }
  ```
* ID 選取器：  
  含有 id 屬性的 HTML 元素，應是該 ID 值在頁面上唯一的元素。您可以使用 ID 選取器選取元素。
  ```html
  <div id="message">MESSAGE</div>
  ```
  ```css
  #message {
    border: 1px solid blue;
  }
  ```
* 屬性選取器：  
  尋找具有特定 HTML 屬性或特定 HTML 屬性值的元素。使用方括號 ([ ]) 將選取器包起來，指示 CSS 尋找屬性。
  ```html
  <div data-type="primary">PRIMARY</div>
  ```
  ```css
  [data-type='primary'] {
    color: red;
  }
  ```
* 分組選取器：  
  選取器不必只比對單一元素。您可以使用逗號將多個選取器分組。
  ```css
  strong,
  em,
  .my-class,
  [lang] {
    color: red;
  }
  ```

### 2. 擬類別和擬元素
* 擬類別  
  HTML 元素會處於各種狀態，可能是因為與其互動，或是其中一個子元素處於特定狀態。
  ```css
  /* 滑鼠游標懸停在 a 元素上 */
  a:hover {
    outline: 1px dotted green;
  }
  ```
* 

---

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

