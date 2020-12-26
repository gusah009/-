const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  // 스키마 형식
  // _id는 기본 키로 생성해줍니다.
  name: {
    type: String,
    // 필수
    required: true,
    // 고유한 값 (중복불가)
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  married: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comment: String,
});

module.exports = mongoose.model('User', userSchema);