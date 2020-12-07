const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function createCounter(siteId){
    if (!siteId)
        throw new Error('site required to update count')

    return docClient.put({
        TableName: 'resume-counters',
        Item: {
            siteId: siteId,
            count: 1
        }
    }).promise()
    .then((res) => {
      console.log('Count is saved!', res)
      return res
    })
    .catch((saveError) => {
      console.log(`Oops, Count is not saved :(`, saveError)
      throw saveError
    })
}

module.exports = createCounter