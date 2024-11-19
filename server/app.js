const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Message from ${name} (${email}): ${message}`);
  res.status(200).send({ success: true });
});

app.listen(5000, () => console.log('Server running on port 5000'));
