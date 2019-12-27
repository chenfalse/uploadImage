const router = require('koa-router')()
const upload = require('../utils/upload')
const { getFileInfo, getFileList } = require('../controller/file')

router.post('/api/uploadImage', upload.single('file'), async (ctx, next) => {
  const {
    destination,
    filename,
    path,
    size,
    mimetype 
  } = ctx.req.file

  ctx.body = await getFileInfo({
    destination,
    filename,
    path,
    size,
    mimetype 
  })
})

router.post('/api/getFileList', async (ctx, next) => {
  const { page, pageSize } = ctx.request.body
  ctx.body = await getFileList({ page, pageSize })
})  

module.exports = router
