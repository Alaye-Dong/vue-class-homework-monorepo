# Vue 课程作业

这个仓库使用 pnpm workspaces 实现 Monorepo 管理所有 Vue 课程的作业项目。

## 项目结构

```
├── packages/                    # 所有作业包目录
│   ├── experiment-2-brand-list/ # 实验2：品牌列表
│   └── ... 其他作业
├── package.json                # 根目录配置
├── pnpm-workspace.yaml         # pnpm 工作空间配置
└── README.md                   # 项目说明
```

## 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

## 快速开始

1. **安装所有依赖**:
   ```bash
   pnpm install
   # 或使用别名
   pnpm run install:all
   ```

2. **运行所有项目**:
   ```bash
   pnpm run dev
   ```

3. **运行特定项目**:
   ```bash
   # 使用 pnpm filter
   pnpm --filter experiment-2-brand-list dev
   
   # 或直接进入项目目录
   cd packages/experiment-2-brand-list
   pnpm dev
   ```

4. **构建所有项目**:
   ```bash
   pnpm run build
   ```

5. **预览所有项目**:
   ```bash
   pnpm run preview
   ```

6. **清理项目**:
   ```bash
   pnpm run clean
   ```

## 常用命令

| 命令 | 描述 |
|------|------|
| `pnpm install` | 安装所有依赖 |
| `pnpm run dev` | 并行运行所有项目的开发服务器 |
| `pnpm run build` | 并行构建所有项目 |
| `pnpm run preview` | 并行预览所有项目 |
| `pnpm run clean` | 清理所有项目的构建产物和依赖 |
| `pnpm --filter <package> <command>` | 在特定包中运行命令 |

## 添加新作业

在 `packages` 目录下创建新的文件夹，并初始化 Vue 项目：

```bash
cd packages
mkdir new-homework
cd new-homework
# 初始化 Vue 项目
pnpm create vite . --template vue-ts
```

## 注意事项

- 使用 `pnpm install` 而不是 `npm install` 来确保依赖正确安装
- 所有包共享同一个 `node_modules`，减少磁盘空间占用
- 使用 `pnpm -r` 或 `pnpm --filter` 来管理特定包

## 关于 pnpm workspace 安装依赖的说明

在 monorepo 工作区中，pnpm 需要明确指定依赖安装的位置。

### 解决方案

1. **安装到根工作区**（推荐用于共享依赖）：
```bash
pnpm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest -w
```
这样所有子项目都可以共享这些依赖，而不需要在每个子项目中重复安装。

2. **安装到特定子项目**：
```bash
pnpm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest --filter homework-1
```
