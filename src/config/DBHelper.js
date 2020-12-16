import mongoose from 'mongoose'
import config from './index'

// 创建连接
mongoose.connect(config.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => {
  console.log('connect success!');
})

mongoose.connection.on('error', (err) => {
  console.log('connect error:' + err);
})

mongoose.connection.on('disconnected', () => {
  console.log('disconnected success!');
})

export default mongoose