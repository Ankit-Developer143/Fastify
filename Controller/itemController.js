const items = require('../item')
const userModel = require('../Model/user')


const addItem = async (req, reply) => {
    const user = new userModel({
        name: req.body.name,
        city: req.body.city
    })
    try {
        const data = await user.save();
        reply.send(data)
    } catch (err) {
        reply.send(err)
    }
}


const getItem = async (request, reply) => {
    const { id } = await request.params
    console.log(id)

    const item = await userModel.find({
        _id:id
    });
    reply.send(item)
    console.log(item)
}

const getAllItems = async (request, reply) => {
    reply.send(items)
}



module.exports = {
    getAllItems,
    getItem,
    addItem
}