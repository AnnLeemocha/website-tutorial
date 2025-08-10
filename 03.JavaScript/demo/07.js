console.log("=== window 物件 ===");
console.log(window);

console.log("=== document 物件 ===");
console.log(window.document);
console.log(document);
// 顯示為 JavaScript 物件（含所有屬性與方法）
// console.dir(document); 
console.log("--- 取得標籤物件 ---");
const el = document.getElementById("document");
console.log(el);
console.log(el.getElementsByTagName("span"));
const el2 = document.getElementsByClassName("doc-class");
console.log(el2);

// 設定/修改標籤物件 (color)
function modifyColor(color) {
    el.style.color = color;
}

// 新增標籤物件
function addNode() {
    let newel = document.createElement("div");
    newel.className="js-added";
    newel.id = "id-added";
    newel.innerHTML="這是新增的標籤物件 (在 #document 元素中)";
    el.appendChild(newel);
}
// 新增標籤物件 (body)
function addNodeToBody() {
    let newel = document.createElement("div");
    newel.className="js-added";
    newel.id = "id-added2";
    newel.innerHTML="這是新增的標籤物件 (在 body 元素中)";
    document.body.appendChild(newel);
}

// 移除標籤物件
function removeNode() {
    const getElement = document.getElementById("id-added");
    getElement.remove();
}


console.log("=== location 物件 ===");
console.log(location);
function addHash() {
    location="#123";
}
function gotoGoogle() {
    location.href = "https://www.google.com.tw/";
}

console.log("=== screen 物件 ===");
console.log(screen);
// console.log(screen.width); // 螢幕的物理解析度寬度
// console.log(window.innerWidth); // 瀏覽器可視區域的寬度
// console.log(document.documentElement.clientWidth); // 可視區域的寬度

console.log("=== navigator 物件 ===");
// 儲存了瀏覽器相關的資訊，例如使用者的裝置、語言、是否連網、瀏覽器類型等。
console.log(navigator);
function copyText() {
  const text = document.getElementById("text").innerText;
  
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log("複製成功！");
    })
    .catch(err => {
      console.log("複製失敗：" + err);
    });
}

console.log("=== history 物件 ===");
console.log(history);
function lastPage(){
    history.back()
    console.log(location.href);
}
function nextPage(){
    history.forward()
    console.log(location.href);
}

console.log("=== localStorage 物件 ===");
console.log(localStorage);
function getLocalStorage(key){
    console.log(localStorage.getItem(key));
}
function setLocalStorage(key, value){
    localStorage.setItem(key, value);
}
function removeLocalStorage(key){
    localStorage.removeItem(key);
}
function cleanAllLocalStorage(){
    localStorage.clear();
}

// 警告視窗
function tryAlert() {
    try {
        alert("Hello! 我是警告視窗 alert()");
    } catch (error) {
        console.error(error);    
    }
}

// 確認視窗
function tryConfirm() {
    try {
        confirm("Are you sure?");
    } catch (error) {
        console.error(error);    
    }
}

// 輸入視窗
function tryPrompt() {
    try {
        let input = prompt("Enter a number","123"); // 輸入視窗
        console.log(`input = ${input}`);
    } catch (error) {
        console.error(error);    
    }
}
