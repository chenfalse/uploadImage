/**
 * @description 文件数据模型
 * @author 陈佳兵
 */

const Sequelize = require('sequelize')
const seq = require('../seq')

const File = seq.define('file', {
  destination: {
    type: Sequelize.STRING,
    allowNull: false
  },
  filename: {
    type: Sequelize.STRING,
    allowNull: false
  },
  path: {
    type: Sequelize.STRING,
    allowNull: false
  },
  size: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  mimetype: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = File