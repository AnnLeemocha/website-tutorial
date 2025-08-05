# JavaScript 教學 - 自動排程


---

讓程式可以在指定的時間做指定的事情。

沒有排程的程式無法控制時間。

## 建立排程
| 方法名稱                  | 說明                     | 範例                                                      |
| --------------------- | ---------------------- | ------------------------------------------------------- |
| `setTimeout(函式, 毫秒)`  | **延遲執行**：經過指定毫秒後執行一次函式 | `setTimeout(() => { alert("1秒後顯示"); }, 1000);`          |
| `setInterval(函式, 毫秒)` | **間隔執行**：每隔指定毫秒重複執行函式  | `setInterval(() => { console.log("每2秒執行一次"); }, 2000);` |

### 排程的編號
* 新增一個排程，就像是在行事曆中加入一個待做事項。系統會自動替排程編號。
* 排程編號會在呼叫 setTimeout 或 setInterval 時回傳。

## 刪除排程
刪除排程，就像是取消行事曆中的一個計畫、一個約會。需要排程編號。
| 方法名稱                             | 說明      | 範例                                                |
| -------------------------------- | ------- | ------------------------------------------------- |
| `clearTimeout(timeoutID)`        | 取消延遲執行  | `const id = setTimeout(...); clearTimeout(id);`   |
| `clearInterval(intervalID)`      | 停止重複執行  | `const id = setInterval(...); clearInterval(id);` |

### 範例：
```js
// 延遲 3 秒跳出提示
setTimeout(function () {
  alert("3 秒後提示");
}, 3000);

// 每 5 秒印出一次訊息
const timer = setInterval(function () {
  console.log("每 5 秒執行一次");
}, 5000);

// 10 秒後停止 setInterval
setTimeout(function () {
  clearInterval(timer);
}, 10000);
```
