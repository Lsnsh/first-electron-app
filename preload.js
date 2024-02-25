const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  project: () => process.env.npm_package_version,
  ping: () => ipcRenderer.invoke('ping'),
  // 除函数之外，我们也可以暴露变量
});
