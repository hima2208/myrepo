from pynamodb.models import Model
from pynamodb.attributes import UnicodeAttribute, NumberAttribute
import os

# Read from env vars
REGION = os.getenv("AWS_REGION", "us-east-1")
ENDPOINT_URL = os.getenv("DYNAMODB_ENDPOINT_URL", "https://dynamodb.us-east-1.amazonaws.com")

# Define your DynamoDB model
class UserModel(Model):
    class Meta:
        table_name = "users"
        region = REGION
        host = ENDPOINT_URL  # optional, e.g. for local or VPC endpoint
        # Optional: set `read_capacity_units`, `write_capacity_units`, etc.

    user_id = UnicodeAttribute(hash_key=True)
    name = UnicodeAttribute()
    age = NumberAttribute(null=True)

# Create the table if it doesn't exist
if not UserModel.exists():
    print("Creating table...")
    UserModel.create_table(read_capacity_units=5, write_capacity_units=5, wait=True)
    print("Table created.")
else:
    print("Table already exists.")
