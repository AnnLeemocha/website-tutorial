# CSS 教學 - 選擇器

參考：
* [彭彭的教學課程 | CSS 基本教學](https://docs.google.com/presentation/d/1dY4PyAzQA-3_pXnGzFHRY1TOSqtcFtR33T6AjtEt7wU/edit?usp=sharing)

範例：
* [selectors.html](../example/selectors.html)
* [selectors.css](../example/selectors.css)

---

## 選擇器 (Selector)
### 1. 簡單的選擇器
最直接的一組選擇器針對 HTML 元素以及類、ID 和其他可以添加到 HTML 標籤中的屬性。

* 通用選擇器（Universal selector）  
  (也稱為萬用字元) 可與任何元素相符。
  ```css
  * {
    color: hotpink;
  }
  ```

* 類型選取器（Type selector）  
  直接比對 HTML 元素。
  ```css
  p {
    color: red;
  }
  ```

* 類別選取器（Class selector）    
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

* ID 選取器（ID selector）  
  含有 id 屬性的 HTML 元素，應是該 ID 值在頁面上唯一的元素。您可以使用 ID 選取器選取元素。
  ```html
  <div id="message">MESSAGE</div>
  ```
  ```css
  #message {
    border: 1px solid blue;
  }
  ```

* 屬性選取器（Attribute selector）  
  尋找具有特定 HTML 屬性或特定 HTML 屬性值的元素。使用方括號 ([ ]) 將選取器包起來，指示 CSS 尋找屬性。
  ```html
  <div data-type="primary">PRIMARY</div>
  ```
  ```css
  [data-type='primary'] {
    color: red;
  }
  ```

* 分組選取器（Selector list）  
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
* 擬類別（Pseudo classes）  
  HTML 元素會處於各種狀態，可能是因為與其互動，或是其中一個子元素處於特定狀態。
  ```css
  /* 滑鼠游標懸停在 a 元素上 */
  a:hover {
    outline: 1px dotted green;
  }
  ```

* 擬元素（Pseudo elements）  
  虛擬元素不會回應平台狀態，而是會以 CSS 插入新元素的方式運作。
  ```css
  /* 在元素開頭插入內容 */
  .my-element::before {
    content: 'Prefix - ';
  }
  ```

### 3. 複雜選取器
組合運算子  
https://developer.mozilla.org/zh-TW/docs/Web/CSS/CSS_selectors#組合選擇器

* 後代選擇器（Descendant combinator）  
  ` ` (空格) 組合器選擇前一個元素的後代節點。

  **HTML**
  ```html
  <div class="container">
    <section>
      <p>This is a <strong>bold</strong> text inside a paragraph.</p>
    </section>
  </div>
  ```
  **CSS**
  ```css
  /*
    這裡 <strong> 是 .container 的後代（透過 <section> → <p>），
    即使層級較深，仍會被選中。因此，bold 文字會變成藍色。
  */
  .container strong {
    color: blue;
  }
  ```

* 子代選擇器（Child combinator）  
  `>` 組合器選擇前一個元素的直接子代的節點。

  **HTML**
  ```html
  <div class="parent">
    <p>Paragraph 1</p>
    <div>
      <p>Paragraph 2</p>
    </div>
  </div>
  ```
  **CSS**
  ```css
  /* 
    只有 Paragraph 1 會變綠，因為它是 .parent 的直接子元素，
    而 Paragraph 2 是孫代，不會被選中。 
  */
  .parent > p {
    color: green;
  }
  ```

* 一般兄弟選擇器（General sibling combinator）  
  `~` 組合器選擇兄弟元素，也就是說，後一個節點在前一個節點後面的任意位置，並且共享同一個父節點。

  **HTML**
  ```html
  <h2>Title</h2>
  <p>First paragraph</p>
  <p>Second paragraph</p>
  ```
  **CSS**
  ```css
  /* 
    First paragraph 和 Second paragraph 都會變紅，
    因為它們都是 h2 的兄弟元素並且位在其後。
  */
  h2 ~ p {
    color: red;
  }
  ```

* 相鄰兄弟選擇器（Adjacent sibling combinator）  
  `+` 組合器選擇相鄰元素，即後一個元素緊接在前一個之後，並且共用同一個父節點。

  **HTML**
  ```html
  <h3>Subtitle</h3>
  <p>Only this paragraph will be styled</p>
  <p>This one will not be affected</p>
  ```
  **CSS**
  ```css
  /* 
    只有緊接在 h3 之後的那個 <p> 會變粗，第二個 <p> 不會受影響。
  */
  h3 + p {
    font-weight: bold;
  }
  ```
