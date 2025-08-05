from pynamodb.models import Model
from pynamodb.attributes import UnicodeAttribute
from datetime import datetime
import os

REGION = os.getenv("AWS_REGION", "us-east-1")
ENDPOINT_URL = os.getenv("DYNAMODB_ENDPOINT_URL", "https://dynamodb.us-east-1.amazonaws.com")

class EnvRequest(Model):
    class Meta:
        table_name = "env_requests"
        region = REGION
        host = ENDPOINT_URL

    request_id = UnicodeAttribute(hash_key=True)
    env_name = UnicodeAttribute()
    env_purpose = UnicodeAttribute()
    use_case = UnicodeAttribute()
    data_domain = UnicodeAttribute()
    instance_type = UnicodeAttribute()
    ide_option = UnicodeAttribute()
    framework_option = UnicodeAttribute()
    requested_by = UnicodeAttribute(null=True)
    status = UnicodeAttribute(null=True)
    created_at = UnicodeAttribute(default=lambda: datetime.utcnow().isoformat())

# Create the table if it doesn't exist
if not UserModel.exists():
    print("Creating table...")
    UserModel.create_table(read_capacity_units=5, write_capacity_units=5, wait=True)
    print("Table created.")
else:
    print("Table already exists."
