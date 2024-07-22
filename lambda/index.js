const AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
  const params = {
    Message: 'Incident occurred: ' + JSON.stringify(event),
    TopicArn: "arn:aws:sns:us-east-2:339712707581:incident-alerts"
  };

  try {
    await sns.publish(params).promise();
    console.log('test successful');
    return 'Message sent successfully';
  } catch (error) {
    console.error('AWS Error:', error.message); 
    throw new Error('Error sending message to SNS');
  }
};