const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
//const rp = require('minimal-require-promise')

function updateCounter(siteId){
    if (!siteId)
        throw new Error('site required to update count')

        var params = {
          TableName:table,
          Key:{
              "siteId": siteId
          },
          UpdateExpression: "set count = :c + :val",
          ExpressionAttributeValues:{
              ":val": 1
          },
          ReturnValues:"UPDATED_NEW"
        };
        
        console.log("Updating the item...");
        docClient.update(params, function(err, data) {
          if (err) {
              console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
          } else {
              console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
          }
        });            
}

//var userCount = 123;

//function getCounter(resumeCounter) {
//    if (!resumeCounter)
//      return userCount
//}

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
  
module.exports = getCounter, updateCounter