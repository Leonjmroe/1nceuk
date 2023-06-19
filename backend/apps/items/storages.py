from storages.backends.s3boto3 import S3Boto3Storage

class ItemStorage(S3Boto3Storage):
    bucket_name = '1nceuk'
    location = 'Items'

class StaticStorage(S3Boto3Storage):
    bucket_name = '1nceuk'
    location = 'static'
