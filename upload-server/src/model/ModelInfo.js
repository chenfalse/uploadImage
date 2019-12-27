/**
 * @description 统一处理res数据格式返回
 * @author 陈佳兵
 */

class BasModel {
  constructor({errno, data, message}) {
    this.errno = errno
    if(data) {
      this.data = data
    }
    if(message) {
      this.message = message
    }
  }
}

class SuccessModel extends BasModel {
  constructor (data = {}) {
    super({
      errno: 0,
      data
    })
  }
}

class ErrorModel extends BasModel {
  constructor({errno, message }) {
    super({
      errno,
      message
    })
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}