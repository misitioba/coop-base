const funql = require('funql-api')
const mongoose = require('mongoose')
module.exports = async (app) => {
  return await funql.middleware(app, {
    /* defaults */
    getMiddlewares: [],
    postMiddlewares: [],
    allowGet: false,
    allowOverwrite: false,
    attachToExpress: true,
    allowCORS: false,
    api: {
      async helloWorld(name) {
        const kittySchema = new mongoose.Schema({
          name: String,
        })
        const Kitten = mongoose.model('Kitten', kittySchema)
        const silence = new Kitten({
          name: 'Silence',
        })
        await silence.save()
        return `Hello ${name}`
      },
    },
  })
}
