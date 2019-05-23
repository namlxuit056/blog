import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  gender: String,
  phone: String,
});
