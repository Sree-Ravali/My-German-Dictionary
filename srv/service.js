const cds = require('@sap/cds')

class MyService extends cds.ApplicationService { init() {
  this.on('getAllNouns', async (req) => {
    const { Words } = this.entities
    return await SELECT.from(Words).where({ type: 'noun' })
  })
  return super.init()
}}

module.exports = MyService
