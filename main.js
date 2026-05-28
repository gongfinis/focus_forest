const { app, BrowserWindow, Tray, Menu, ipcMain, nativeImage } = require('electron');
const path = require('path');

let mainWindow = null;
let tray = null;
let isQuitting = false;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 680,
    minWidth: 360,
    minHeight: 500,
    maxWidth: 500,
    maxHeight: 900,
    resizable: true,
    titleBarStyle: 'hidden',
    frame: false,
    vibrancy: 'light',
    transparent: false,
    alwaysOnTop: true,
    fullscreenable: false,
    backgroundColor: '#fbf9f5',
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile('index.html');

  // 关闭窗口时最小化到托盘而非退出
  mainWindow.on('close', (e) => {
    if (!isQuitting) {
      e.preventDefault();
      mainWindow.hide();
      if (tray) {
        tray.displayBalloon?.({
          title: '专注森林',
          content: '应用已最小化到系统托盘'
        });
      }
      return false;
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function createTray() {
  // 创建托盘图标（用绘制方式生成）
  const icon = nativeImage.createFromPath(path.join(__dirname, 'icon.png'));
  tray = new Tray(icon.resize({ width: 16, height: 16 }));

  const contextMenu = Menu.buildFromTemplate([
    {
      label: '专注森林',
      enabled: false
    },
    { type: 'separator' },
    {
      label: '显示窗口',
      click: () => {
        if (mainWindow) {
          mainWindow.show();
          mainWindow.focus();
        }
      }
    },
    {
      label: '开始/暂停',
      click: () => {
        if (mainWindow) {
          mainWindow.webContents.send('tray-toggle');
        }
      }
    },
    {
      label: '重置',
      click: () => {
        if (mainWindow) {
          mainWindow.webContents.send('tray-reset');
        }
      }
    },
    { type: 'separator' },
    {
      label: '退出',
      click: () => {
        isQuitting = true;
        app.quit();
      }
    }
  ]);

  tray.setToolTip('专注森林 - 番茄钟');
  tray.setContextMenu(contextMenu);

  tray.on('click', () => {
    if (mainWindow) {
      if (mainWindow.isVisible()) {
        mainWindow.hide();
      } else {
        mainWindow.show();
        mainWindow.focus();
      }
    }
  });
}

app.whenReady().then(() => {
  createWindow();
  createTray();

  // 开机自启
  app.setLoginItemSettings({
    openAtLogin: true,
    path: app.getPath('exe')
  });
});

app.on('window-all-closed', (e) => {
  e.preventDefault();
});

app.on('before-quit', () => {
  isQuitting = true;
});

app.on('activate', () => {
  if (mainWindow) {
    mainWindow.show();
    mainWindow.focus();
  }
});

// 接收渲染进程的窗口控制消息
ipcMain.on('window-minimize', () => {
  if (mainWindow) mainWindow.minimize();
});

ipcMain.on('window-close', () => {
  if (mainWindow) mainWindow.hide();
});

ipcMain.on('update-tray-title', (event, title) => {
  if (tray) tray.setToolTip(title);
});
