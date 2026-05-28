const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  minimize: () => ipcRenderer.send('window-minimize'),
  close: () => ipcRenderer.send('window-close'),
  onTrayToggle: (callback) => ipcRenderer.on('tray-toggle', callback),
  onTrayReset: (callback) => ipcRenderer.on('tray-reset', callback),
  updateTrayTitle: (title) => ipcRenderer.send('update-tray-title', title),
  platform: process.platform,
});
