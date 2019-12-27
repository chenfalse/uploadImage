/**
 * @description 创建sequelize 实例
 * @author 陈佳兵
 */

const Sequelize = require('sequelize')
const conf = {
  host: 'localhost',
  dialect: 'mysql'
}
const seq = new Sequelize('project', 'root', 'c101498', conf)

module.exports = seq