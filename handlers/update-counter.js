'use strict'

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
//const rp = require('minimal-require-promise')


function updateCounter(siteId) {

  return docClient.update({
    TableName: 'resume-counters',
    Key: {
      siteId: siteId
    },
    UpdateExpression: 'set resCounter = resCounter + :val',
//    UpdateExpression: 'set resCounter = resCounter + 1',
    ExpressionAttributeValues: {
      ":val": 1
    },
    ReturnValues: 'ALL_NEW'
  }).promise()
  .then((result) => {
    console.log('Order is updated!', result)
    return result.Attributes
  })
  .catch((updateError) => {
    console.log(`Oops, order is not updated :(`, updateError)
    throw updateError
  })


}

module.exports =  updateCounter