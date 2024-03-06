const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // TODO: 生产环境获取不到运行时的 NPM 变量
  application: () => process.env.npm_package_version,
  ping: () => ipcRenderer.invoke('ping'),
  // 除函数之外，我们也可以暴露变量
});

contextBridge.exposeInMainWorld('electronAPI', {
  checkUpdate: () => ipcRenderer.invoke('check-update'),
  showIPCDemo: (title) => ipcRenderer.send('show-ipc-demo', title),
});
