const items = require('../item')
function itemRoutes(fastify, options, done) {
    //Get all items
    fastify.get('/item', async function (request, reply) {
        reply.send(items)
    })

    //Get single item
    fastify.get('/items/:id', async function (request, reply) {
        const { id } = await request.params

        const item = await items.find((item) => item.id == id);
        reply.send(item)
    })
    done();
}
module.exports = itemRoutes;