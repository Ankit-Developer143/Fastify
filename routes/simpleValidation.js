const items = require('../item')

const getItemOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        name: { type: 'string' }
                    }
                }
            }
        }
    }
}
const getItemOptions = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    name: { type: 'string' }
                }
            }
        }
    }
}
function itemRoutes(fastify, options, done) {
    //Get all items
    fastify.get('/item', getItemOpts, async function (request, reply) {
        reply.send(items)
    })

    //Get single item
    fastify.get('/items/:id', getItemOptions, async function (request, reply) {
        const { id } = await request.params

        const item = await items.find((item) => item.id == id);
        reply.send(item)
    })
    done();
}
module.exports = itemRoutes;