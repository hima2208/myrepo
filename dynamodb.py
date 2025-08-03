import boto3
import uuid
from datetime import datetime, timezone
from botocore.exceptions import ClientError

# Replace with your actual region
AWS_REGION = "us-east-1"

# Initialize DynamoDB resource
dynamodb = boto3.resource('dynamodb', region_name=AWS_REGION)

# Table name to be used
TABLE_NAME = "EnvironmentRequests"

def create_table():
    try:
        table = dynamodb.create_table(
            TableName=TABLE_NAME,
            KeySchema=[
                {'AttributeName': 'request_id', 'KeyType': 'HASH'},  # Partition key
            ],
            AttributeDefinitions=[
                {'AttributeName': 'request_id', 'AttributeType': 'S'},
            ],
            ProvisionedThroughput={
                'ReadCapacityUnits': 5,
                'WriteCapacityUnits': 5,
            }
        )
        print("Creating table. Please wait...")
        table.meta.client.get_waiter('table_exists').wait(TableName=TABLE_NAME)
        print(f"Table '{TABLE_NAME}' created successfully.")
    except ClientError as e:
        if e.response['Error']['Code'] == 'ResourceInUseException':
            print(f"Table '{TABLE_NAME}' already exists.")
        else:
            raise

def write_environment_request():
    table = dynamodb.Table(TABLE_NAME)

    # Dummy form data — replace with actual values from your app
    env_request = {
        'request_id': str(uuid.uuid4()),
        'env_name': 'TestEnv',
        'env_purpose': 'Demo',
        'use_case': 'Regression Modeling',
        'data_domain': 'Retail Lending',
        'ide': 'jupyter',
        'timestamp': datetime.now(timezone.utc).isoformat(),
    }

    try:
        response = table.put_item(Item=env_request)
        print("Successfully inserted item:")
        print(env_request)
    except ClientError as e:
        print(f"Failed to write item: {e.response['Error']['Message']}")

if __name__ == "__main__":
    create_table()
    write_environment_request()
