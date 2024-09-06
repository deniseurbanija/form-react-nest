import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: './.env' });

import mongoose from 'mongoose';

const URI = process.env.MONGODB_URI;

const mongoConnect = async () => {
  try {
    await mongoose.connect(URI);
    console.log('MONGO DB CONNECTED');
  } catch (error) {
    console.log(error);
  }
};

export { mongoConnect };
