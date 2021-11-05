const fastify = require("fastify")({ logger: true });
const PORT = 5000;
//register fastify routes 
//fastify.register(require('./routes/simpleRouting'))
//fastify.register(require('./routes/itemValidationandHandler'));
//fastify.register(require('./routes/simpleValidation'));
fastify.register(require('./routes/withController'))


const start = async () => {
    try {
        await fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error);
        process.exit(1)
    }
}
start();