# 🌿 专注丛林 - Focus Jungle

**用专注时间种树养动物，打造你的专注丛林 — 番茄钟学习工具**

[![GitHub Pages](https://github.com/gongfinis/focus_forest/actions/workflows/deploy.yml/badge.svg)](https://github.com/gongfinis/focus_forest/actions/workflows/deploy.yml)
![Version](https://img.shields.io/badge/version-2.0.0-green)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ 项目简介

专注丛林是一款基于番茄工作法的专注力管理工具，通过游戏化的方式帮助你保持专注。每完成一个番茄时间（25分钟），你就能在虚拟土地上种下一棵树或养成一只小动物，逐渐培育出属于你的专注丛林。

## 🎯 核心功能

### ⏱️ 番茄钟计时器
- **25分钟专注模式**：标准番茄工作时间
- **5分钟短休息**：保持高效的小憩
- **15分钟长休息**：完成4个番茄后的深度放松
- **可视化进度环**：直观展示当前进度
- **植物生长动画**：专注时看着小树苗慢慢长大

### 🌳 2.5D 等距森林视图
- **日视图**：查看当天种植的所有树木，3D等距视角展示
- **月视图**：浏览整个月的专注记录，回顾成长历程
- **树木动画效果**：微风吹拂、生长弹出等自然动效
- **环境粒子系统**：飘落的树叶和闪烁的光点营造沉浸感

### 🌱 伙伴系统（树木 + 动物）
- **多种树木与动物选择**：可自由切换专注伙伴
- **个性化丛林**：根据你的偏好打造独特生态
- **状态追踪**：树木枯萎、动物逃跑等失败状态可视化

### 📱 PWA 支持
- **离线可用**：Service Worker 支持离线使用
- **添加到主屏幕**：可安装为原生应用体验
- **响应式设计**：完美适配手机、平板和桌面设备
- **深色模式友好**：护眼的配色方案

## 🚀 在线体验

🔗 **访问地址**: [https://gongfinis.github.io/focus_forest/](https://gongfinis.github.io/focus_forest/)

> 💡 推荐使用 Chrome / Edge / Safari 等现代浏览器以获得最佳体验

## 🛠️ 技术栈

- **前端**: HTML5 + CSS3 + Vanilla JavaScript
- **桌面端**: Electron 31.x（可选）
- **构建工具**: Electron Builder 24.x
- **部署平台**: GitHub Pages + GitHub Actions
- **设计风格**: Material Design 3 配色系统

## 📦 本地运行

### 方式一：直接打开（推荐用于网页版）

```bash
# 克隆仓库
git clone https://github.com/gongfinis/focus_forest.git
cd focus_forest

# 直接在浏览器中打开 index.html
open index.html
```

### 方式二：Electron 桌面应用

```bash
# 安装依赖
npm install

# 启动开发模式
npm start

# 构建生产版本
npm run build-mac    # macOS
npm run build-win    # Windows  
npm run build-linux  # Linux
npm run build        # 全平台
```

## 📁 项目结构

```
focus-forest/
├── index.html          # 主页面（包含完整的UI和逻辑）
├── main.js             # Electron 主进程
├── preload.js          # Electron 预加载脚本
├── sw.js               # Service Worker（离线支持）
├── manifest.json       # PWA 清单文件
├── icon.png            # 应用图标
├── icon-192.png        # PWA 图标 (192x192)
├── icon-512.png        # PWA 图标 (512x512)
├── package.json        # 项目配置
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions 自动部署配置
```

## 🎨 设计特色

### 视觉设计
- **等距3D视角**：采用 CSS 3D Transform 实现的 2.5D 等距投影
- **Material Design 3**：遵循最新 Material Design 设计规范
- **自然配色**：以森林绿为主色调，温暖的米色背景
- **精致细节**：阴影层次、圆角统一、过渡动画流畅

### 交互体验
- **即时反馈**：按钮点击、悬停都有细腻的视觉反馈
- **平滑动画**：CSS transitions 和 keyframes 实现丝滑动效
- **手势友好**：触摸设备优化，支持移动端操作

## 🔧 自定义配置

你可以在应用内调整以下设置：

- ⏱️ **专注时长**：默认 25 分钟
- ☕ **短休息时长**：默认 5 分钟  
- 🌙 **长休息时长**：默认 15 分钟
- 🔄 **自动开始下一个番茄**
- 🔔 **声音提醒开关**

## 📊 使用统计

应用会记录你的专注数据：
- 每日完成的番茄数
- 累计专注时长
- 历史丛林成长轨迹
- 月度/年度统计报告

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- **番茄工作法** - Francesco Cirillo 创建的时间管理方法
- **Forest App** - 灵感来源，专注力培养的游戏化实践
- **Material Design** - Google 的设计语言规范
- **Electron** - 强大的跨平台桌面应用框架

---

<div align="center">

**🌱 开始你的专注之旅，种下第一棵树或迎来第一只小动物吧！**

Made with ❤️ by [gongfinis](https://github.com/gongfinis)

</div>
