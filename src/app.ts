import express from 'express';
import dotenv from 'dotenv';
dotenv.config({});

const app = express();

const PORT = process.env.PORT || 8000;

app.use('/', (_req, res) => {
  res.status(200).json({ message: 'OK' });
});
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
