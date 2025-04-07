# 🚀 ProofOfPurpose (PoP)

> 一种结合 AI、环保理念、真实用途的新一代低功耗区块链挖矿实验项目。

---

## 🌱 项目目标

传统挖矿耗电高、对环境无贡献。**ProofOfPurpose** 旨在探索：

- 低功耗、低门槛挖矿（仅需普通 CPU）
- 公平任务分配 + 运气机制（小概率高奖励）
- 挖矿过程具有计算意义（可扩展到 AI、科学任务）
- 高安全性防篡改、防病毒验证机制

---

## 💡 核心机制

| 项目 | 内容 |
|------|------|
| 共识机制 | 自定义 PoP（Proof of Purpose） |
| 挖矿条件 | 解开服务器发布的任务（Hash Puzzle） |
| 运气奖励 | 每百万次中一次大奖（可调） |
| 硬件要求 | CPU 即可挖矿，低至 Ryzen 3600 的 10% |
| 安全性 | 高等级 SHA256 校验 + 防病毒篡改设计中 |

---

## 🧪 项目结构
```bash
project/
├── server/           # Node.js 后端
│   └── server.js     # 提供挖矿任务 + 校验提交
├── miner/            # Node.js 控制台矿工（可跑在 WSL）
│   └── miner.js
├── public/           # 浏览器矿工（前端界面）
│   └── index.html
```

---

## ⚙️ 快速开始（开发环境）

### 1️⃣ 安装依赖（在项目根目录）
```bash
npm install
```

### 2️⃣ 启动后端服务器
```bash
node server/server.js
```

### 3️⃣ 打开浏览器矿工（可直接打开）
```bash
public/index.html
```

### 4️⃣ 启动 CLI 矿工（适合跑在 WSL、Raspberry Pi）
```bash
node miner/miner.js
```

## 📌 待开发
- 奖励系统（Token 计量 / 钱包地址）
- 节点认证 & P2P 分发
- 防病毒 & 防篡改验证（签名 + 哈希）
- 区块链结构搭建（可选私链/轻链）
- Web UI 美化 + 排行榜系统

---

## 🙌 初心者声明
本项目为探索性实验，欢迎 Fork 与 PR。

💡 希望在不浪费资源的前提下，让“挖矿”真正有价值！

---

## 🧠 作者理念
> 如果算力能用在 AI 推理、科学模拟，而挖矿也能回馈现实世界，
> 那加密货币就不仅是投机，而是 有意义的数字贡献机制。

---

## 📜 License
MIT License - 自由探索，欢迎合作。