const path = require('path');
const DynamoDbLocal = require('dynamodb-local');

const startServer = async () => {
  console.log('Starting local DynamoDB server...');
  const child = await DynamoDbLocal.launch(
    8000,
    path.join(__dirname),
    [],
    true,
    false,
  );
  console.log('Local DynamoDB started.');
  console.log(`PID: ${child.pid}`);
};

startServer();
