# Visual Studio Code 基礎教學筆記

參考連結：
* [Medium | Visual Studio Code開發網站入門教學](https://medium.com/@success85911/visual-studio-code%E9%96%8B%E7%99%BC%E7%B6%B2%E7%AB%99%E5%85%A5%E9%96%80%E6%95%99%E5%AD%B8-7514ea9299bf)
* [官方快捷鍵文件](https://github.com/Microsoft/vscode-tips-and-tricks)
* [官方文件](https://code.visualstudio.com/docs/getstarted/getting-started)
* [Microsoft | 開始使用 Visual Studio Code 搭配適用於 Linux 的 Windows 子系統](https://learn.microsoft.com/zh-tw/windows/wsl/tutorials/wsl-vscode)
* [任柏澔 HackMD 筆記 | 洛奇的邪惡駔之手札 | [學習之路] VSCode 的技巧大補帖](https://summer10920.github.io/2020/10-23/article-vscode/)
* [vscode-基礎操作](https://hackmd.io/@howhow/vscode_operation)

## 什麼是 Visual Studio Code

Visual Studio Code (VS Code) 是一款免費且功能強大的程式碼編輯器，適用於多種作業系統和程式語言。 以下是一些VS Code 的基本教學，涵蓋安裝、介面導覽、基本操作、擴充功能以及一些進階功能：

---

### 1. 下載與安裝
* 前往 [Visual Studio Code 官方網站](https://code.visualstudio.com/download) 下載適合您作業系統的版本。 

* 執行安裝程式，並按照指示完成安裝。 

* 安裝過程中，建議勾選所有「新增至PATH」選項，以便在終端機中直接使用 `code <檔案/資料夾>` 命令開啟檔案或資料夾。 

---

### 2. 介面導覽
* **側邊欄(Activity Bar):**  
  位於左側，提供檔案總管、搜尋、原始碼控制、除錯、擴充功能等功能。

* **編輯器(Editor):**  
  顯示程式碼檔案內容，可同時開啟多個檔案。

* **狀態列(Status Bar):**  
  位於底部，顯示目前檔案的相關資訊，如程式語言、行數、編碼等。

* **面板(Panel):**  
  位於底部或右側，顯示終端機、輸出、問題等資訊。

---

### 3. 基本操作
* **開啟檔案/資料夾:**  
  使用檔案總管或 File > Open Folder 開啟現有的專案或檔案。 

* **建立新檔案:**  
  在檔案總管中右鍵點擊資料夾，選擇「新增檔案」。 

* **編輯檔案:**  
  在編輯器中直接輸入程式碼，編輯完成後，可以按下 `Ctrl + S` (Windows/Linux) 或 `Cmd + S` (Mac) 儲存檔案。 

* **執行程式碼:**  
  * 如果已設定好程式語言的執行環境(如Python interpreter)，可以直接點擊右上角的執行按鈕(綠色三角形)。 
  * 也可以使用快捷鍵`Ctrl + ` (Windows/Linux) 或`Cmd + ` (Mac) 開啟終端機，輸入執行指令(如 python your_file.py)。 

* **設定程式語言:**  
  * 若程式碼檔案的語言沒有自動偵測，可以點擊狀態列右下角的語言名稱，然後選擇正確的語言。 
  * 也可以使用快捷鍵 `Ctrl + Shift + P` (Windows/Linux) 或 `Cmd + Shift + P` (Mac)，然後輸入 Change Language Mode 來設定語言模式。 

* **搜尋:**  
  使用 `Ctrl + Shift + F` (Windows/Linux) 或 `Cmd + Shift + F` (Mac) 搜尋整個專案的檔案內容。 

* **取代:**  
  使用 `Ctrl + Shift + H` (Windows/Linux) 或 `Cmd + Shift + H` (Mac) 進行取代操作。 

* **註解**  
  使用 `Ctrl + /` (Windows/Linux) 或 `Cmd + /` (Mac) 可直接單行註解，或選取區塊註解。

---

### 4. 擴充功能(Extensions)
* **安裝擴充功能:**  
  點擊側邊欄的擴充功能圖示(四個方塊)，搜尋需要的擴充功能，然後點擊「安裝」。 

* **推薦擴充功能:**  
  程式語言支援: 根據您的程式語言需求，安裝相應的語言擴充功能(如Python, C/C++, Java, etc.)。 

* **程式碼格式化:**   
  如 Prettier 或 Beautify。 

* **除錯工具:**   
  如 Debugger for Chrome。 

* **版本控制:** 
  如 GitLens。 

* **中文(繁體) 語言包:**  
  如 Chinese (Traditional) Language Pack for Visual Studio Code。 

---

### 5. 進階功能
* **設定檔:**  
  VS Code 支援使用者設定檔和工作區設定檔，可以自訂編輯器的外觀、行為和功能。 
  
* **終端機:**  
  VS Code 內建終端機，可以直接在編輯器中執行指令。 

* **除錯:**  
  VS Code 內建除錯工具，可以設定中斷點、查看變數值等。

* **版本控制:**   
  VS Code 支援 Git，可以方便地進行版本控制。 