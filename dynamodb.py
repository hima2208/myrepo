

import boto3
import uuid
from datetime import datetime

# --- AWS Session Setup ---
session = boto3.Session(
    aws_access_key_id='your-access-key-id',
    aws_secret_access_key='your-secret-access-key',
    aws_session_token='your-session-token',  # omit if not using temporary creds
    region_name='us-east-1'
)
dynamodb = session.resource('dynamodb')

# --- Create Table if not exists ---
table_name = 'EnvironmentRequests'
try:
    table = dynamodb.create_table(
        TableName=table_name,
        KeySchema=[
            {'AttributeName': 'request_id', 'KeyType': 'HASH'}
        ],
        AttributeDefinitions=[
            {'AttributeName': 'request_id', 'AttributeType': 'S'}
        ],
        ProvisionedThroughput={
            'ReadCapacityUnits': 5,
            'WriteCapacityUnits': 5
        }
    )
    table.meta.client.get_waiter('table_exists').wait(TableName=table_name)
    print(f"✅ Table '{table_name}' created.")
except dynamodb.meta.client.exceptions.ResourceInUseException:
    table = dynamodb.Table(table_name)
    print(f"⚠️ Table '{table_name}' already exists. Proceeding...")

# --- Create and Insert Record ---
request_id = str(uuid.uuid4())

item = {
    'request_id': request_id,
    'env_name': 'DemoEnv',
    'env_purpose': 'Testing',
    'use_case': 'Demo Use Case',
    'data_domain': 'Retail',
    'timestamp': datetime.utcnow().isoformat()
}

table.put_item(Item=item)
print(f"✅ Record inserted with request_id: {request_id}")
