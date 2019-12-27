/**
 * @description 文件操作逻辑
 * @author 陈佳兵
 */

const { saveFile, findFileList } = require('../services/file')
const { SuccessModel, ErrorModel } = require('../model/ModelInfo')
const { saveFileError, findFileListError } = require('../model/ErrorInfo')

async function getFileInfo({destination, filename, path, size, mimetype }) {
  const result = await saveFile({destination, filename, path, size, mimetype })
  if(!result) {
    return new ErrorModel(saveFileError)
  }
  return new SuccessModel()
}

async function getFileList({ page, pageSize }) {
  const result = await findFileList({ page, pageSize })
  if(!result) {
    return new ErrorModel(findFileListError)
  }
  return new SuccessModel(result)
}

module.exports = {
  getFileInfo,
  getFileList
}