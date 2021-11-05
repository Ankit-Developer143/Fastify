const items = require('../item')
const val = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' }
    }
}

const getItemOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: val
            }
        }
    },
    handler: function (request, reply) {
        reply.send(items)
    }
}
const getItemOptions = {
    schema: {
        response: {
            200: val
        }
    },
    handler: async function (request, reply) {
        const { id } = await request.params

        const item = await items.find((item) => item.id == id);
        reply.send(item)
    }
}
function itemRoutes(fastify, options, done) {
    //Get all items
    fastify.get('/item', getItemOpts)

    //Get single item
    fastify.get('/items/:id', getItemOptions)
    done();
}
module.exports = itemRoutes;