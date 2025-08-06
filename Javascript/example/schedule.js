const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
if (!isBrowser) {
    console.error("請在瀏覽器中執行");
}

// 停止計時器
let loopID = null;
let delayID = null;

// 間隔執行：每隔指定毫秒重複執行函式
const getLoopElement = document.getElementById("loop-count");

function loop(sec = 1) {
    // 清除計時器，避免重複點擊
    clearInterval(loopID);

    getLoopElement.innerHTML = 0;
    loopID = setInterval(() => {
            getLoopElement.innerHTML = getLoopElement.innerHTML * 1 + 1;
        }
    , 1000 * sec);
}

function stopLoop() {
    getLoopElement.innerHTML = "我被取消了";
    clearInterval(loopID);
}

// 延遲執行：經過指定毫秒後執行一次函式
const getDelayElement = document.getElementById("delay-count");

function delay(sec = 1) {
    // 清除計時器，避免重複點擊
    clearTimeout(delayID);
    
    getDelayElement.innerHTML = "等待中";
    delayID = setTimeout(() => {
            getDelayElement.innerHTML = "執行了";
        }
    , 1000 * sec);
}

function stopDelay() {
    getDelayElement.innerHTML = "我被取消了";
    clearTimeout(delayID);
}