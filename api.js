'use strict'

const Api = require('claudia-api-builder')
const api = new Api()

const getPizzas = require('./handlers/get-pizzas')
const getOrders = require('./handlers/get-orders')
const createOrder = require('./handlers/create-order')
const updateOrder = require('./handlers/update-order')
const deleteOrder = require('./handlers/delete-order')

const getCounter = require('./handlers/get-counter')
const updateCounter = require('./handlers/update-counter')

// Define routes
api.get('/', () => 'Welcome to Pizza API')

api.get('/resumecounter', (request) => {
    return getCounter()
  })

api.get('/resumecounter/{siteId}', (request) => {
    return getCounter(request.pathParams.siteId)
}, {
    error: 404
})

api.put('/rcadd/{siteId}', (request) => {
    return updateCounter(request.pathParams.siteId)
}, {
    error: 404
})

  api.get('/pizzas', () => {
    return getPizzas()
})

api.get('/pizzas/{id}', (request) => {
    return getPizzas(request.pathParams.id)
  }, {
    error: 404
})
  
  api.get('/orders', (request) => {
    return getOrders()
  }, {
    error: 400
  })

api.get('/orders/{id}', (request) => {
    return getOrders(request.pathParams.id)
  }, {
    error: 400
  })

api.post('/orders', (request) => {
    return createOrder(request.body)
}, {
    success: 201,
    error: 400
})

api.put('/orders/{id}', (request) => {
    return updateOrder(request.pathParams.id, request.body)
}, {
    error: 400
})

api.delete('/orders/{id}', (request) => {
    return deleteOrder(request.pathParams.id)
}, {
    error: 400
})

module.exports = api