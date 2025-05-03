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
    difficulty: 4, // 可调，代表要多少个前导0
  };
}

app.get('/task', (req, res) => {
  res.json(currentTask);
  console.log('\n发送任务：', currentTask);
});

app.post('/submit', (req, res) => {
  const { id, nonce, result } = req.body;
  const target = '0'.repeat(currentTask.difficulty);
  const hash = crypto.createHash('sha256').update(currentTask.seed + nonce).digest('hex');

  if (hash === result && hash.startsWith(target)) {
    console.log('\n验证通过，矿工提交：', req.body);    
    currentTask = generateTask(); // 新任务
    return res.json({ success: true, reward: 50 });
  }

  res.json({ success: false });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Mine using web (public/index.html) or node version (miner/miner.js)`);
});