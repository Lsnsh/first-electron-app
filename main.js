const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { updateElectronApp } = require('update-electron-app');

updateElectronApp();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // 在 MacOS 系统下的 VSCode 中启动调试后，关闭窗口后，第二次调用 createWindow 方法执行 win.loadFile 时窗口内容白屏，后续再关闭重新打开也一直时白屏
  // 在 MacOS 系统下的 VSCode 中刷新调试后，关闭窗口后，第二次调用 createWindow 方法执行 win.loadFile 时窗口内容正常，后续也正常
  win.loadFile('index.html');
  // win.loadURL("https://www.baidu.com")

  // console.log(`Current directory: ${process.cwd()}`)
};

app.whenReady().then(() => {
  console.log(
    'ready',
    `node: ${process.version}`,
    `project: ${process.env.npm_package_version}`
  );
  // console.log('process.version', process.versions, process.env.npm_package_version);

  ipcMain.handle('ping', () => 'pong');
  createWindow();

  app.on('activate', () => {
    console.log('activate');

    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  console.log('window-all-closed');

  // app.quit()
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
