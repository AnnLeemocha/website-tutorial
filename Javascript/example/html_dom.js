const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
if (!isBrowser) {
    console.error("請在瀏覽器中執行");
}

// window 物件
console.log("=== window 物件 ===");
console.log(`window ➜`); 
console.log(window);

// document 物件
console.log("");
console.log("=== document 物件 ===");
console.log(`document (= window.document) ➜`); 
console.log(document);
console.log(`document.getElementById("id") ➜`); 
console.log(document.getElementById("document"));

// location 物件
console.log("");
console.log("=== location 物件 ===");
console.log(`location (= window.location) ➜`); 
console.log(location);
location="#123";
console.log(`location="#123" ➜`); 
console.log(location);

// screen 物件
console.log("");
console.log("=== screen 物件 ===");
console.log(`screen (= window.screen) ➜`); 
console.log(screen);
console.log(`screen.width ➜ (單位：像素 px)`); 
console.log(screen.width);
console.log(`screen.height ➜ (單位：像素 px)`); 
console.log(screen.height);

// navigator 物件
// 儲存了瀏覽器相關的資訊，例如使用者的裝置、語言、是否連網、瀏覽器類型等。
console.log("");
console.log("=== navigator 物件 ===");
console.log(`navigator (= window.navigator) ➜`); 
console.log(navigator);

// history 物件
console.log("");
console.log("=== history 物件 ===");
console.log(`history (= window.history) ➜`); 
console.log(history);

// console 物件
console.log("");
console.log("=== console 物件 ===");
console.log(`console (= window.console) ➜`); 
console.log(console);

// localStorage 物件
console.log("");
console.log("=== localStorage 物件 ===");
console.log(`localStorage (= window.localStorage) ➜`); 
console.log(localStorage);
console.log(`localStorage.setItem("myKey", "myValue");`);
localStorage.setItem("myKey", "myValue");
console.log(`localStorage.getItem("myKey") ➜`); 
console.log(localStorage.getItem("myKey"));
console.log(`localStorage.removeItem("myKey");`);
localStorage.removeItem("myKey");


// 程式操作畫面的步驟
console.log("");
console.log("=== 程式操作畫面的步驟 ===");

// 取得標籤物件
const getElementById = document.getElementById("document");
console.log(`document.getElementById("document") ➜`); 
console.log(getElementById);

// 設定/修改標籤物件
console.log(`document.getElementById("id").style.color = "red";`); 
getElementById.style.color = "red";

// 新增標籤物件
console.log(`let obj = document.createElement("div");`); 
let obj = document.createElement("div");
obj.className="js-added";
obj.id = "id-added";
obj.innerHTML="這是新增 div 標籤物件";
document.body.appendChild(obj);

const getElementsByClassName = document.getElementsByClassName("js-added");
console.log(`document.getElementsByClassName("js-added") ➜`); 
console.log(getElementsByClassName);
let obj2 = document.createElement("div");
obj2.className="js-added2";
obj2.innerHTML="這是又新增 div 標籤物件";
getElementsByClassName[0].appendChild(obj2);

// 移除標籤物件
function removeNode() {
    console.log(`document.getElementById("id-added").getElementsByClassName("js-added2")[0].remove();`); 
    const getElement = document.getElementById("id-added");
    getElement.getElementsByClassName("js-added2")[0].remove();
}

