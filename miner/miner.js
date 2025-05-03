const axios = require('axios');
const crypto = require('crypto');

const mine = async(id) => {
  const { data: task } = await axios.get('http://127.0.0.1:3333/task');
  const target = '0'.repeat(task.difficulty);
  let nonce = 0;

  while (true) {
    const hash = crypto.createHash('sha256').update(task.seed + nonce).digest('hex');

    if (hash.startsWith(target)) {
      console.log('挖到了！nonce:', nonce, 'hash:', hash);
      const res = await axios.post('http://127.0.0.1:3333/submit', { id, nonce, result: hash });
      console.log('服务器回应：', res.data);
      break;
    }
    nonce++;
  }
};

const user = {
  name: 'Alice',
  id: 100,
}

setInterval(() => mine(user.id), 1000);