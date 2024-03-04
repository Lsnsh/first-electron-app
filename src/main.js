const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { updateElectronApp } = require('update-electron-app');

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // INFO: 在 MacOS 系统下的 VSCode 中启动调试后，关闭窗口后，第二次调用 createWindow 方法执行 mainWindow.loadFile 时窗口内容白屏，后续再关闭重新打开也一直时白屏
  // 在 MacOS 系统下的 VSCode 中刷新调试后，关闭窗口后，第二次调用 createWindow 方法执行 mainWindow.loadFile 时窗口内容正常，后续也正常
  mainWindow.loadFile('./src/index.html');
};

const createChildWindow = (parent, folderPath = '', title = '') => {
  const childWindow = new BrowserWindow({
    parent: parent,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, folderPath, 'preload.js'),
    },
  });

  childWindow.loadFile(path.join(__dirname, folderPath, 'index.html'));
  childWindow.once('ready-to-show', () => {
    childWindow.show();
    title && childWindow.setTitle(title);
  });
};

const handleIPCChannelMessage = () => {
  ipcMain.handle('ping', () => 'pong');

  ipcMain.on('show-ipc-demo', (event, title) => {
    const webContents = event.sender;
    const win = BrowserWindow.fromWebContents(webContents);
    createChildWindow(win, './demos/ipc', title);
    console.log('show-ipc-demo title', title);
  });

  // IPC Demo Message TODO: Extract code to reduce duplication
  ipcMain.on('set-title', (event, title) => {
    const webContents = event.sender;
    const win = BrowserWindow.fromWebContents(webContents);
    console.log(`on:set-title:receive: ${title}`);
    win.setTitle(title);
  });
};

const initElectronApp = () => {
  app.whenReady().then(() => {
    console.log(
      'ready',
      `node: ${process.version}`,
      `project: ${process.env.npm_package_version}`
    );

    // Create Main Window
    createWindow();
    // Handle IPC Channel Message
    handleIPCChannelMessage();

    app.on('activate', () => {
      console.log('activate');

      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });

  app.on('window-all-closed', () => {
    console.log('window-all-closed');

    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
};

initElectronApp();

updateElectronApp();
