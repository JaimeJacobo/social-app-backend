import mongoose from 'mongoose';
import 'dotenv/config';

export const dbConnect = () => {
  // Const user = process.env.USER_DB;
  // const passwd = process.env.PASSWD_DB;
  // const cluster = 'cluster0.vjniyww.mongodb.net';
  // const dataBase = 'Quotes Bruno';
  const uri = `mongodb+srv://bruno100vc:123abc@cluster0.vjniyww.mongodb.net/?retryWrites=true&w=majority`;

  return mongoose.connect(uri);
};
// Temp mongodb+srv://bruno100vc:<password>@cluster0.vjniyww.mongodb.net/?retryWrites=true&w=majority
