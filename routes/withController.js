const { getAllItems, getItem, addItem } = require('../controller/itemController')
const val = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        city: { type: 'string' }
    }
}

const getItemOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                items: {
                    name: { type: 'string' },
                    city: { type: 'string' }
                }
            }
        }
    },
    handler: getAllItems
}
const getItemOptions = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        _id: { type: 'string' },
                        name: { type: 'string' },
                        city: { type: 'string' }
                    }
                }
            }
        }
    },
    handler: getItem
}

const postM = {
    schema: {
        response: {
            201: {
                items: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        city: { type: 'string' }
                    }
                }
            }
        }
    },
    handler: addItem
}
function itemRoutes(fastify, options, done) {
    //Get all items
    fastify.get('/item', getItemOpts)

    //Get single item
    fastify.get('/items/:id', getItemOptions)

    fastify.post('/add', postM)
    done();
}
module.exports = itemRoutes;