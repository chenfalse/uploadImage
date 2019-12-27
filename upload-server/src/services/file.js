/**
 * @description 文件操作
 * @author 陈佳兵
 */

const File = require('../db/model/File')

async function saveFile({ destination, filename, path, size, mimetype }) {
  const file = await File.create(
    {
      destination,
      filename,
      path,
      size,
      mimetype 
    }
  )
  return file.dataValues
}

async function findFileList({ page, pageSize}) {
  const FileList = await File.findAndCountAll({
    limit: pageSize,
    offset: (page -1) * pageSize,
    order: [
      ['id', 'desc']
    ]
  })
  return result = {
    count: FileList.count,
    fileList: FileList.rows.map(list => list.dataValues)
  }
}

module.exports = {
  saveFile,
  findFileList
}