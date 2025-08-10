function alertEvent(msg) {
    return () => alert("事件發生: " + msg);
}

let myEvent = document.getElementById("event");
// 會覆蓋前一個函式
myEvent.onclick = alertEvent("click 1");
myEvent.onclick = alertEvent("click 2");

// 可以綁定多個處理函式
myEvent.addEventListener("click", alertEvent("addEventListener 1"));
myEvent.addEventListener("click", alertEvent("addEventListener 2"));

function getEventInfo(e) {
    console.log(e);
    alert(e.clientX + "," + e.clientY);
}

// 初始位置
let posX = 100;
let posY = 400;
const step = 10; // 每次移動的距離
const box = document.getElementById("box");
const handleClick = (event) => {
    switch (event.key) {
      case "ArrowUp":
        posY -= step;
        break;
      case "ArrowDown":
        posY += step;
        break;
      case "ArrowLeft":
        posX -= step;
        break;
      case "ArrowRight":
        posX += step;
        break;
      default:
        return; // 非方向鍵則不動作
    }

    // 更新方塊位置
    box.style.top = posY + "px";
    box.style.left = posX + "px";

};

function addEvent() {
    document.addEventListener("keydown", handleClick);
    // alert("事件已新增");
}

// 移除事件
function removeEvent() {
    document.removeEventListener("keydown", handleClick);
    // alert("事件已移除");
}

// 系統觸發事件
window.addEventListener("load", function () {
    alert("頁面載入完成");
});