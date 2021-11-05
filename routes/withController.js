const { getAllItems, getItem } = require('../controller/itemController')
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
    handler: getAllItems
}
const getItemOptions = {
    schema: {
        response: {
            200: val
        }
    },
    handler: getItem
}
function itemRoutes(fastify, options, done) {
    //Get all items
    fastify.get('/item', getItemOpts)

    //Get single item
    fastify.get('/items/:id', getItemOptions)
    done();
}
module.exports = itemRoutes;