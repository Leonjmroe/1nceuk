from storages.backends.s3boto3 import S3Boto3Storage


class ItemStorage(S3Boto3Storage):
    bucket_name = '1nceuk'
    location = 'Items'
    file_overwrite = False

    def url(self, name):
        url = super().url(name)
        if url.startswith('https://'):
            url = url.replace('https://%s/' % self.bucket.name, 'https://%s/' % self.custom_domain)
        return url


class ItemDevStorage(S3Boto3Storage):
    bucket_name = '1nceuk'
    location = 'Items_Dev'

    def url(self, name):
        url = super().url(name)
        if url.startswith('https://'):
            url = url.replace('https://%s/' % self.bucket.name, 'https://%s/' % self.custom_domain)
        return url


class StaticStorage(S3Boto3Storage):
    bucket_name = '1nceuk'
    location = 'static'


