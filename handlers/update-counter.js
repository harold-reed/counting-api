var AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient();
//const rp = require('minimal-require-promise')

function updateCounter(siteId) {
  
//  console.log("Updating the item...");
  
  return docClient.update({
    TableName: 'resume-counters',
    Key: {
      siteId: siteId
    },
    UpdateExpression: 'set resCounter = resCounter + :val',
    ExpressionAttributeValues: {
      ':val': 1
    },
    ReturnValues: 'ALL_NEW'
  }) 
//  }).promise()
//  .then(result => result.Item)
}

module.exports =  updateCounter