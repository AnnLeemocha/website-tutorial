/**
 * @file 工具函式集合
 * @author 你
 */


/**
 * 將兩個數字相加
 * @param {number} a - 第一個數字
 * @param {number} b - 第二個數字
 * @returns {number} 回傳相加結果
 */
export function add(a, b) {
  return a + b;
}


/**
 * 將字串轉成大寫形式
 * @param {string} str - 要轉換的字串
 * @returns {string} 轉換後的大寫字串
 */
export function toUpper(str) {
  return str.toUpperCase();
}

/**
 * 判斷一個值是否為空（null、undefined、空字串）
 * @param {*} value - 任意型別的值
 * @returns {boolean} 若為空則回傳 true
 */
function isEmpty(value) {
  return value === null || value === undefined || value === '';
}


/**
 * 取得目前時間（ISO 字串）
 * @returns {string}
 */
export function getCurrentTime() {
  return new Date().toISOString();
}

// 預設匯出（可選）
const defaultMsg = "Hello from tool.js!";
export default { add, toUpper, isEmpty, defaultMsg };
