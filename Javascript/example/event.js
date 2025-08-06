const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
if (!isBrowser) {
    console.error("請在瀏覽器中執行");
}

function alertEvent(msg) {
    return () => alert("事件發生: " + msg);
}

let myEvent = document.getElementById("event");
// 會覆蓋前一個函式
document.getElementById("event").onclick = alertEvent("click 1");
document.getElementById("event").onclick = alertEvent("click 2");

// 可以綁定多個處理函式
myEvent.addEventListener("click", alertEvent("addEventListener 1"));
myEvent.addEventListener("click", alertEvent("addEventListener 2"));

function getEventInfo(e) {
    console.log(e);
    alert(e.clientX + "," + e.clientY);
}

let myEvent2 = document.getElementById("info");
myEvent2.addEventListener("click", getEventInfo);

// 移除事件
function removeEvent() {
    myEvent2.removeEventListener("click", getEventInfo);
    alert("事件已移除");
}
let myEvent3 = document.getElementById("remove");
myEvent3.addEventListener("click", removeEvent);

// 系統觸發事件
window.addEventListener("load", function () {
    alert("頁面載入完成");
});