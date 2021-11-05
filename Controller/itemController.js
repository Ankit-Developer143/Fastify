const items = require('../item')
const getAllItems = (request, reply) => {
    reply.send(items)
}
const getItem =  async (request, reply) => {
    const { id } = await request.params

    const item = await items.find((item) => item.id == id);
    reply.send(item)
}
module.exports = {
    getAllItems,
    getItem
}