const express = require('express');
const crypto = require('crypto');
const cors = require('cors');

const app = express();
const PORT = 3333;

app.use(cors());
app.use(express.json());

let currentTask = generateTask();

function generateTask() {
  return {
    index: Date.now(),
    seed: crypto.randomBytes(16).toString('hex'),
    difficulty: 3, // 可调，代表要多少个前导0
  };
}

app.get('/task', (req, res) => {
  res.json(currentTask);
});

app.post('/submit', (req, res) => {
  const { nonce, result } = req.body;
  const target = '0'.repeat(currentTask.difficulty);
  const hash = crypto.createHash('sha256').update(currentTask.seed + nonce).digest('hex');

  if (hash === result && hash.startsWith(target)) {
    console.log('✅ 验证通过，矿工提交：', nonce);
    currentTask = generateTask(); // 新任务
    return res.json({ success: true, reward: 50 });
  }

  res.json({ success: false });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🌐 Server running on http://localhost:${PORT}`);
});