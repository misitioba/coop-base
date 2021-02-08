const app = require('express')()
const funql = require('funql-api')
funql.middleware(app, {
  /* defaults */
  getMiddlewares: [],
  postMiddlewares: [],
  allowGet: false,
  allowOverwrite: false,
  attachToExpress: true,
  allowCORS: false,
  api: {
    helloWorld(name) {
      return `Hello ${name}`
    },
  },
})

module.exports = app
