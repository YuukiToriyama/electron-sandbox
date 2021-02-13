/* src/main.js */

// Electronの読み込み
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// ウィンドウの設定
const windowOptions = {
	webPreferences: {
		nodeIntegration: true
	},
	width: 800,
	height: 600
};
// メインウィンドウとアプリの初期化
let mainWindow;
app.on("ready", () => {
	mainWindow = createWindow(windowOptions, "index.html");
});
// すべてのウィンドウが閉じた時
app.on("window-all-closed", () => {
	app.quit();
});

// メインウィンドウの作成
const createWindow = (options, filePath) => {
	let mainWindow = new BrowserWindow(options);
	mainWindow.loadFile(filePath);
	// ディベロッパーツールも起動する
	mainWindow.webContents.openDevTools();
	// ウィンドウが閉じられたときの処理
	mainWindow.on("closed", () => {
		mainWindow = null;
	});
	return mainWindow;
}