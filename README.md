# comming-soon

一个静态页面项目，根目录提供 `index.html`，资源文件位于 `assets/`。

## 本地预览

直接用任意静态文件服务器打开当前目录即可，例如：

```bash
python3 -m http.server 8080
```

然后访问 `http://localhost:8080`。

## Docker（Nginx）

项目已提供 `Nginx` 的 `Dockerfile`，用于托管静态页面。

### 构建镜像

```bash
docker build -t comming-soon:local .
```

### 运行容器

```bash
docker run --rm -p 8080:80 comming-soon:local
```

然后访问 `http://localhost:8080`。

## GitHub Actions 自动构建镜像

已添加工作流文件：

- `.github/workflows/docker-image.yml`

触发条件：

- 推送到 `main` 或 `master`
- 推送标签 `v*`
- `Pull Request`（仅构建，不推送）
- 手动触发（`workflow_dispatch`）

镜像推送位置（GHCR）：

- `ghcr.io/<owner>/<repo>`

示例：

```bash
docker pull ghcr.io/your-org/comming-soon:latest
```

## 目录结构

```text
.
├── index.html
├── assets/
├── Dockerfile
└── .github/workflows/docker-image.yml
```

## AI 参与说明

为提高文档与工程配置整理效率，本仓库在以下内容编写过程中使用了 AI 辅助：

- `README.md`
- `Dockerfile`
- `.dockerignore`
- `.github/workflows/docker-image.yml`

使用的 AI 工具/模型：`Codex（基于 GPT-5）`
