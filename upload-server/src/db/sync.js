/**
 * @description 同步数据库
 * @author 陈佳兵
 */

const seq = require('./seq')
require('./model/File')

//测试连接
seq.authenticate().then(() => {
  console.log('ok')
}).catch((err) => {
  console.log('err',err)
})

seq.sync({force: true}).then(() => {
  console.log('sync ok')
  process.exit()
})