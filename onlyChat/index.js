const { app, BrowserWindow, ipcMain, dialog} = require('electron');
// 在这里添加需要在渲染进程中使用的 Node.js 模块或 Electron 模块
const path = require('path'); 
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          contextIsolation: true,
          preload: path.join(__dirname, 'preload.js'),
          nodeIntegration: true,  // 启用 nodeIntegration
        }
      });
  mainWindow.loadFile('index.html');
  // 打开开发者工具
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});

ipcMain.on('show-dialog', (event) => {
    // 弹出确认框
    dialog.showMessageBox(mainWindow, {
      type: 'info',
      title: 'Information',
      message: 'Button clicked!',
      buttons: ['OK'],
    });
  });