# 旧城纪事报 - 探案游戏

一款基于1920年代报纸风格的沉浸式探案游戏。通过阅读报纸上的新闻、广告和八卦，收集线索，推理出真相。

## 本项目由[阿里云ESA](https://www.aliyun.com/product/esa)提供加速、计算和保护

![阿里云ESA](https://img.alicdn.com/imgextra/i3/O1CN01H1UU3i1Cti9lYtFrs_!!6000000000139-2-tps-7534-844.png)

## 项目特色

### 创意卓越
- **复古报纸风格**：完美还原1920年代报纸排版，使用米黄色纸张、衬线字体、噪点纹理
- **沉浸式阅读体验**：所有交互都发生在报纸文本中，无复杂游戏UI
- **精心设计的视觉风格**：避免AI味儿，使用温暖的复古色系，不规则布局

### 应用价值
- **寓教于乐**：锻炼逻辑推理能力和细节观察能力
- **多关卡设计**：7个独立案件，每个案件都有完整的故事背景
- **进度保存**：自动保存游戏进度，随时继续探案
- **移动端优先**：完美适配手机、平板和桌面设备

### 技术探索
- **边缘函数**：使用ESA边缘函数实现千问API代理，提供AI提示功能
- **边缘存储**：利用浏览器本地存储保存游戏进度
- **边缘计算**：在边缘节点处理API请求，降低延迟
- **静态资源托管**：通过ESA Pages托管前端资源，全球加速

## How We Use Edge

本项目充分利用了阿里云ESA的完整边缘生态：

### 1. ESA Pages 静态资源托管
- 前端React应用通过ESA Pages部署，实现全球CDN加速
- 静态资源（HTML、CSS、JS、图片）在边缘节点缓存，降低访问延迟
- 支持SPA路由，确保前端路由正常工作

### 2. 边缘函数（Edge Functions）
- **千问API代理**：`/api/qwen` 边缘函数作为千问API的代理
  - 在边缘节点处理API请求，避免跨域问题
  - 保护用户API Key安全，不暴露在前端代码中
  - 降低API调用延迟，提升用户体验
- **统一路由分发**：`functions/index.js` 实现API路由分发逻辑

### 3. 边缘存储
- 使用浏览器LocalStorage存储游戏进度
- 通过Zustand状态管理库实现持久化存储
- 保存用户的线索收集进度、已完成关卡等信息

### 4. 边缘缓存
- 静态资源在边缘节点自动缓存
- API响应可配置缓存策略，减少重复请求

## 游戏玩法

1. **选择案件**：在主页选择一个案件开始调查
2. **阅读报纸**：仔细阅读报纸上的各个版块（头条、广告、八卦等）
3. **收集线索**：点击可疑的文本，线索会自动记录到侦探笔记中
4. **推理破案**：收集齐所有线索后，回答三个问题推理出真相
5. **查看结局**：根据你的推理，查看是否成功破案

## 技术栈

### 前端
- **React 18**：现代化的UI框架
- **Vite**：快速的构建工具
- **Tailwind CSS**：实用优先的CSS框架
- **React Router**：前端路由管理
- **Zustand**：轻量级状态管理

### 边缘函数
- **ESA Edge Functions**：边缘计算能力
- **千问API**：AI提示功能

### 部署
- **ESA Pages**：静态资源托管和全球加速
- **GitHub**：代码托管

## 本地开发

### 前置要求
- Node.js 18+
- npm 或 pnpm

### 安装依赖
```bash
cd frontend
npm install
```

### 启动开发服务器
```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本
```bash
npm run build
```

## 部署到ESA Pages

### 1. 推送代码到GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/1195214305/39_OldTownChronicle_旧城纪事报探案.git
git push -u origin main
```

### 2. 在ESA控制台创建Pages项目
- 选择从GitHub导入
- 选择仓库：`1195214305/39_OldTownChronicle_旧城纪事报探案`
- 生产分支：`main`
- 构建配置会自动从 `esa.jsonc` 读取

### 3. 配置说明
| 配置项 | 值 |
|--------|-----|
| 项目名称 | old-town-chronicle |
| 生产分支 | main |
| 安装命令 | cd frontend && npm install |
| 构建命令 | cd frontend && npm run build |
| 静态资源目录 | frontend/dist |
| 函数文件路径 | functions/index.js |
| Node.js 版本 | 22.x |

## 游戏关卡

### 关卡1：博物馆窃案
- **案件**：海神之泪蓝宝石失窃
- **难度**：简单
- **线索数量**：20条
- **背景**：维多利亚博物馆镇馆之宝在暴雨夜离奇消失

### 关卡2-7：敬请期待
更多精彩案件正在开发中...

## 千问API配置

1. 访问[阿里云百炼平台](https://dashscope.aliyun.com/)获取API Key
2. 在游戏设置页面输入API Key
3. 在游戏中可以使用AI提示功能帮助破案

## 项目结构

```
39_OldTownChronicle_旧城纪事报探案/
├── frontend/                 # 前端代码
│   ├── src/
│   │   ├── components/      # React组件
│   │   │   ├── Newspaper.jsx          # 报纸组件
│   │   │   ├── DetectiveNotes.jsx     # 侦探笔记组件
│   │   │   └── Modal.jsx              # 模态框组件
│   │   ├── pages/           # 页面
│   │   │   ├── Home.jsx               # 主页（关卡选择）
│   │   │   ├── CasePage.jsx           # 关卡游戏页面
│   │   │   └── Settings.jsx           # 设置页面
│   │   ├── data/            # 数据
│   │   │   └── cases.js               # 关卡数据
│   │   ├── utils/           # 工具函数
│   │   │   └── store.js               # 状态管理
│   │   ├── App.jsx          # 主应用组件
│   │   ├── main.jsx         # React入口
│   │   └── index.css        # 全局样式
│   ├── public/              # 静态资源
│   ├── index.html           # HTML入口
│   ├── package.json         # 依赖配置
│   ├── vite.config.js       # Vite配置
│   ├── tailwind.config.js   # Tailwind配置
│   └── postcss.config.js    # PostCSS配置
├── functions/                # 边缘函数
│   ├── index.js             # 统一入口
│   └── api/
│       └── qwen.js          # 千问API代理
├── esa.jsonc                # ESA配置文件
├── README.md                # 项目文档
└── .gitignore               # Git忽略文件
```

## 开发团队

本项目由个人开发者创作，参加阿里云ESA Pages边缘开发大赛。

## 许可证

MIT License

## 致谢

- 感谢阿里云ESA提供的边缘计算能力
- 感谢千问AI提供的智能提示功能
- 灵感来源于1920年代的报纸排版和经典推理小说
