const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
//const rp = require('minimal-require-promise')

function getCounter(siteId) {
    if (typeof siteId === 'undefined')
      return docClient.scan({
        TableName: 'resume-counters'
      }).promise()
        .then(result => result.Items)
  
    return docClient.get({
      TableName: 'resume-counters',
      Key: {
        siteId: siteId
      }
    }).promise()
      .then(result => result.Item)
  }
  
module.exports = getCounter